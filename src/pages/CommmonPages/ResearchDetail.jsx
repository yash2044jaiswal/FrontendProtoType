import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CARDS } from './Repository.jsx';

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
const btn = `rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:opacity-40 ${focus}`;
const ghost = `rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:border-ink ${focus}`;
const box = 'rounded-card border border-neutral-200 bg-white p-5 shadow-card';
const REACTS = [['wow', '🤯', 'Mind-blown'], ['like', '👍', 'Fascinating'], ['curious', '🤔', 'Curious']];

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } };

// Questions go to the scientist queue. Replace the TODO with your real API.
function sendToScientist(card, q, reason) {
  const inbox = read('polaris_inbox', []);
  const item = { id: Date.now(), card: card.id, title: card.title, q, reason, status: 'pending' };
  write('polaris_inbox', [...inbox, item]);
  // TODO: fetch('/api/scientist-questions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(item) });
  return item.id;
}

/* ------------------------------------------------------------------
   Speech helpers
   Chrome lambi utterance ko ~15s me kaat deta hai. Isliye text ko
   chhote chunks me todkar ek-ek karke bolte hain.
------------------------------------------------------------------ */
function chunkText(text, max = 180) {
  const parts = (text || '').match(/[^.!?।]+[.!?।]?/g) || [text || ''];
  const out = [];
  let cur = '';
  for (const p of parts) {
    if (cur && (cur + p).length > max) { out.push(cur.trim()); cur = p; }
    else cur += p;
  }
  if (cur.trim()) out.push(cur.trim());
  return out.filter(Boolean);
}

/* ------------------------------------------------------------------
   Simple local "AI": answers only if the report text clearly covers
   the question. Swap answerFrom()/summarize() with a real LLM later.
------------------------------------------------------------------ */
const STOP = new Set(['the','is','are','was','and','what','why','how','does','for','tell','about','can','you','with','that','this','kya','hai','ka','ki','ke','me','mein','aur','kab','kaise']);
const words = (s) => (s.toLowerCase().match(/[a-z\u0900-\u097F]{3,}/g) || []).filter((w) => !STOP.has(w));
const asText = (v) => (Array.isArray(v) ? v.join(' ') : (v || ''));

function answerFrom(q, card) {
  const qw = new Set(words(q));
  if (!qw.size) return null;
  const text = asText(card.en) + ' ' + card.fact;
  let best = null, top = 0;
  (text.match(/[^.!?।]+[.!?।]/g) || []).forEach((s) => {
    const n = words(s).filter((w) => qw.has(w)).length;
    if (n > top) { top = n; best = s.trim(); }
  });
  return top >= 2 || (top === 1 && qw.size <= 2) ? best : null;
}

const firstSentence = (t) => ((t || '').match(/[^.!?।]+[.!?।]/) || [t || ''])[0].trim();
const summarize = (card) => {
  const s = asText(card.en).match(/[^.!?।]+[.!?।]/g) || [asText(card.en)];
  return [s[0], s[1], s[s.length - 1], `Fun fact: ${card.fact}`]
    .filter(Boolean)
    .map((x) => x.trim())
    .slice(0, 4);
};

export default function ResearchDetail() {
  const { id } = useParams();
  const card = CARDS.find((c) => c.id === id);
  const track = useRef(null);
  const [paused, setPaused] = useState(false);
  const [lang, setLang] = useState(() => read('polaris_lang', 'EN'));
  const [speaking, setSpeaking] = useState(false);
  const [react, setReact] = useState(null);
  const [summary, setSummary] = useState(null);
  const [doubt, setDoubt] = useState('');
  const [busy, setBusy] = useState('');
  const [answer, setAnswer] = useState(null);
  const [post, setPost] = useState(null);
  const [postN, setPostN] = useState(0);
  const [note, setNote] = useState('');

  const flash = (m) => { setNote(m); setTimeout(() => setNote(''), 2200); };
  const stopSpeech = () => {
    try { window.speechSynthesis.cancel(); } catch { /* unsupported */ }
    setSpeaking(false);
  };

  useEffect(() => {
    stopSpeech();
    window.scrollTo({ top: 0 });
    setReact(read(`polaris_react_${id}`, null));
    setDoubt(read(`polaris_note_${id}`, ''));
    setSummary(null); setAnswer(null); setPost(null); setPostN(0);
    return stopSpeech;
  }, [id]);

  useEffect(() => write('polaris_lang', lang), [lang]);

  /* Chrome bug: ~15s baad speech pause ho jata hai. Ye use thik rakhta hai. */
  useEffect(() => {
    if (!speaking) return;
    const t = setInterval(() => {
      try {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      } catch { /* ignore */ }
    }, 10000);
    return () => clearInterval(t);
  }, [speaking]);

  const slide = (d) => {
    const t = track.current; if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    const left = d > 0 && t.scrollLeft >= max - 4 ? 0
      : d < 0 && t.scrollLeft <= 4 ? max
      : t.scrollLeft + d * t.clientWidth * 0.6;
    t.scrollTo({ left, behavior: 'smooth' });
  };
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => slide(1), 4000);
    return () => clearInterval(t);
  }, [paused, id]);

  if (!card) {
    return (
      <div className="mx-auto max-w-page px-6 py-16 text-center">
        <p className="text-neutral-600">This research page was not found.</p>
        <Link to="/repository" className="mt-3 inline-block font-semibold text-ink underline underline-offset-4">
          Back to the Repository
        </Link>
      </div>
    );
  }

  const text = lang === 'HI' ? asText(card.hi) : asText(card.en);
  const url = `${location.origin}/research/${card.id}`;

  /* Sirf isi card ki gallery — doosre cards ki images mix nahi hongi. */
  const slideItems = (card.gallery && card.gallery.length)
    ? card.gallery
    : [{ src: card.image, alt: card.alt }];

  /* ------------------------------------------------------------------
     Read aloud — chhote chunks me todkar bola jata hai, isliye lamba
     article bhi poora sunai deta hai (EN + हिन्दी dono).
  ------------------------------------------------------------------ */
  const speak = () => {
    if (!('speechSynthesis' in window)) {
      flash('Read-aloud is not supported in this browser.');
      return;
    }
    if (speaking) { stopSpeech(); return; }

    const chunks = chunkText(text, 180);
    if (!chunks.length) return;

    const langCode = lang === 'HI' ? 'hi-IN' : 'en-IN';
    setSpeaking(true);

    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk);
      u.lang = langCode;
      u.rate = 0.95;
      u.pitch = 1;
      if (i === chunks.length - 1) {
        u.onend = () => setSpeaking(false);
        u.onerror = () => setSpeaking(false);
      }
      window.speechSynthesis.speak(u);
    });
  };

  const pick = (k) => {
    const next = react === k ? null : k;
    setReact(next);
    write(`polaris_react_${id}`, next);
    if (next) {
      const it = read('polaris_interest', {});
      card.tags.forEach((t) => { it[t] = (it[t] || 0) + 1; });
      write('polaris_interest', it);
    }
  };

  const doSummary = () => {
    setBusy('sum');
    setTimeout(() => { setSummary(summarize(card)); setBusy(''); }, 700);
  };

  const ask = () => {
    const q = doubt.trim(); if (!q) return;
    setBusy('ask'); setAnswer(null);
    setTimeout(() => {
      const a = answerFrom(q, card);
      setAnswer(a ? { text: a } : { escalated: true, tid: sendToScientist(card, q, 'AI not confident') });
      setBusy('');
    }, 800);
  };

  const forward = () => {
    const q = doubt.trim();
    if (!q) { flash('Write your doubt first.'); return; }
    const tid = sendToScientist(card, q, 'Sent by viewer');
    setAnswer({ forwarded: tid });
    flash('Sent to the scientist');
  };

  const saveNote = () => { write(`polaris_note_${id}`, doubt); flash('Note saved on this device'); };

  const makePost = () => {
    setBusy('post');
    setTimeout(() => {
      const first = firstSentence(asText(card.en));
      const tags = ['#PolarScience', ...card.tags.map((t) => '#' + t[0].toUpperCase() + t.slice(1))].join(' ');
      const all = [
        `🧊 Did you know? ${card.fact}\n\nLearned this on POLARIS by NCPOR. ${tags}\n${url}`,
        `${card.title}: ${first}\nRead the full story 👉 ${url}\n${tags}`,
        `Question for you 🤔 ${card.text}\nExplore the science on POLARIS 🌏 ${url}\n${tags}`,
      ];
      setPost(all[postN % 3]);
      setPostN((n) => n + 1);
      setBusy('');
    }, 700);
  };

  const copy = async (t) => {
    try { await navigator.clipboard.writeText(t); flash('Copied'); }
    catch { flash('Copy blocked by the browser.'); }
  };

  const interest = read('polaris_interest', {});
  const related = CARDS.filter((c) => c.id !== card.id)
    .map((c) => ({ c, s: c.tags.reduce((n, t) => n + (interest[t] || 0) + (card.tags.includes(t) ? 1 : 0), 0) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map((x) => x.c);

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-8">
      <style>{`
        @keyframes pdIn { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        .pd-in { opacity: 0; animation: pdIn .6s ease-out forwards; }
        .pd-track { scrollbar-width: none; }
        .pd-track::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) { .pd-in { opacity: 1; animation: none; } }
      `}</style>

      <nav className="text-sm text-neutral-600" aria-label="Breadcrumb">
        <Link to="/repository" className="font-semibold text-ink underline underline-offset-4">← Repository</Link>
      </nav>

      {/* 1. Sliding images / video — sirf isi card ki gallery */}
      <section
        aria-label="Research images"
        className="pd-in relative mt-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={track} className="pd-track flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-card">
          {card.video && (
            <video
              src={card.video} controls muted loop playsInline poster={card.image}
              className="h-56 w-full shrink-0 snap-start rounded-card object-cover sm:w-1/2 md:h-72 lg:w-1/3"
            />
          )}
          {slideItems.map((s, n) => (
            <div
              key={s.src}
              className="group relative h-56 w-full shrink-0 snap-start overflow-hidden rounded-card border border-neutral-200 sm:w-1/2 md:h-72 lg:w-1/3"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading={n < 3 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
              {n === 0 && (
                <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {card.title}
                </span>
              )}
              <span className="absolute bottom-3 right-3 rounded-full bg-white/85 px-2 py-0.5 text-[11px] font-semibold text-ink">
                {n + 1} / {slideItems.length}
              </span>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => slide(-1)} aria-label="Previous images"
          className={`absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-ink shadow ${focus}`}>‹</button>
        <button type="button" onClick={() => slide(1)} aria-label="Next images"
          className={`absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl text-ink shadow ${focus}`}>›</button>
      </section>

      {/* 2. Article + AI summary */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_300px]">
        <article className={`${box} pd-in`} style={{ animationDelay: '.1s' }}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {card.tags.map((t) => (
                <span key={t} className="rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-semibold capitalize text-neutral-700">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="lang" className="sr-only">Language</label>
              <select
                id="lang"
                value={lang}
                onChange={(e) => { stopSpeech(); setLang(e.target.value); }}
                className={`rounded-lg border border-neutral-300 bg-white px-2 py-1.5 text-sm ${focus}`}
              >
                <option value="EN">English</option>
                <option value="HI">हिन्दी</option>
              </select>
              <button
                type="button"
                onClick={speak}
                aria-pressed={speaking}
                className={btn}
                title="Read this article aloud"
              >
                {speaking ? '⏹ Stop' : lang === 'HI' ? '🔊 हिन्दी में सुनें' : '🔊 Listen in English'}
              </button>
            </div>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-black leading-tight text-ink md:text-4xl">
            {card.title}
          </h1>

          <div className="mt-4 space-y-4" lang={lang === 'HI' ? 'hi' : 'en'}>
            {text.split(/\n\n+/).map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-neutral-800">{p}</p>
            ))}
          </div>

          <p className="mt-4 rounded-lg border-l-4 border-ink bg-neutral-100 p-3 text-neutral-800">
            <strong>Did you know?</strong> {card.fact}
          </p>

          <div className="mt-5 border-t border-neutral-200 pt-4">
            <p className="text-sm font-semibold text-ink">How did this make you feel?</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {REACTS.map(([k, e, l]) => (
                <button
                  key={k} type="button" onClick={() => pick(k)} aria-pressed={react === k}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-transform hover:scale-105 ${
                    react === k ? 'border-ink bg-ink text-white' : 'border-neutral-300 bg-white text-ink'
                  } ${focus}`}
                >
                  {e} {l}
                </button>
              ))}
            </div>
          </div>
        </article>

        <aside className={`${box} pd-in lg:self-start`} style={{ animationDelay: '.2s' }} aria-label="AI summary">
          <h2 className="font-serif text-lg font-black text-ink">Summarise with AI</h2>
          {!summary && <p className="mt-2 text-sm text-neutral-600">Get the key points in seconds.</p>}
          {summary && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-800">
              {summary.map((s) => <li key={s}>{s}</li>)}
            </ul>
          )}
          <button type="button" onClick={doSummary} disabled={busy === 'sum'} className={`${btn} mt-4 w-full`}>
            {busy === 'sum' ? 'Summarising…' : summary ? 'Summarise again' : '✨ Summarise'}
          </button>
          <p className="mt-2 text-xs text-neutral-500">AI-drafted from this report. Verify with the original.</p>
        </aside>
      </div>

      {/* 3. Doubts, AI answer, social */}
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_1fr_1fr]">
        <section className={`${box} pd-in`} style={{ animationDelay: '.3s' }} aria-label="Your doubts and notes">
          <h2 className="font-serif text-lg font-black text-ink">Your doubts or notes</h2>
          <label htmlFor="doubt" className="sr-only">Write your question or note</label>
          <textarea
            id="doubt" value={doubt} onChange={(e) => setDoubt(e.target.value)} rows={5}
            placeholder="Write a question, or a note about this research…"
            className={`mt-3 w-full resize-none rounded-lg border border-neutral-300 p-3 text-sm ${focus}`}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={ask} disabled={!doubt.trim() || busy === 'ask'} className={btn}>
              {busy === 'ask' ? 'Thinking…' : '🤖 Ask AI'}
            </button>
            <button type="button" onClick={saveNote} disabled={!doubt.trim()} className={ghost}>Save note</button>
          </div>
        </section>

        <section className={`${box} pd-in flex flex-col`} style={{ animationDelay: '.4s' }} aria-label="AI answer" aria-live="polite">
          <h2 className="font-serif text-lg font-black text-ink">AI answer</h2>
          <div className="mt-3 flex-1 text-sm text-neutral-800">
            {!answer && <p className="text-neutral-500">Ask a question and the answer will appear here.</p>}
            {answer?.text && (
              <>
                <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-xs font-semibold">
                  AI-drafted · from this report
                </span>
                <p className="mt-2 leading-relaxed">{answer.text}</p>
              </>
            )}
            {answer?.escalated && (
              <p className="rounded-lg bg-neutral-100 p-3 leading-relaxed">
                💡 This goes beyond the sources I have, so I sent it to the scientist automatically
                (ref #{String(answer.tid).slice(-5)}). It may even become a new research idea. You will get
                their reply here once answered.
              </p>
            )}
            {answer?.forwarded && (
              <p className="rounded-lg bg-neutral-100 p-3">
                ✅ Sent to the scientist (ref #{String(answer.forwarded).slice(-5)}).
              </p>
            )}
          </div>
          <button type="button" onClick={forward} className={`${btn} mt-4`}>Forward to scientist →</button>
        </section>

        <section className={`${box} pd-in flex flex-col`} style={{ animationDelay: '.5s' }} aria-label="Social media post">
          <h2 className="font-serif text-lg font-black text-ink">Share on social media</h2>
          <div className="mt-3 flex-1">
            {post ? (
              <pre className="whitespace-pre-wrap rounded-lg bg-neutral-100 p-3 font-sans text-sm text-neutral-800">{post}</pre>
            ) : (
              <p className="text-sm text-neutral-500">Let AI write a ready-to-post caption for this topic.</p>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={makePost} disabled={busy === 'post'} className={btn}>
              {busy === 'post' ? 'Writing…' : post ? 'Regenerate' : '✨ Generate post'}
            </button>
            {post && (
              <>
                <button type="button" onClick={() => copy(post)} className={ghost}>Copy</button>
                <a href={`https://wa.me/?text=${encodeURIComponent(post)}`} target="_blank" rel="noreferrer" className={ghost}>WhatsApp</a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post)}`} target="_blank" rel="noreferrer" className={ghost}>X</a>
              </>
            )}
          </div>
        </section>
      </div>

      <p className="mt-3 text-center text-xs text-neutral-500" aria-live="polite">
        {note || 'Notes and reactions are stored on this device.'}
      </p>

      {/* Related, based on reactions */}
      <section className="mt-8" aria-labelledby="rel">
        <h2 id="rel" className="font-serif text-2xl font-black text-ink">
          {react || Object.keys(interest).length ? 'Picked for your interests' : 'Keep exploring'}
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {related.map((c) => (
            <Link
              key={c.id}
              to={`/research/${c.id}`}
              className={`group overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lg ${focus}`}
            >
              <div className="h-32 overflow-hidden">
                <img src={c.image} alt={c.alt} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="p-3 font-serif font-black text-ink">{c.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}