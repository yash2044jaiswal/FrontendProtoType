import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Photo } from '../../Components/PolarScence.jsx';
import { useAuth } from '../../Auth/useAuth.jsx'; // adjust folder case to match your project

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';
const inputCls = `w-full rounded-lg border bg-white px-3 py-2.5 text-neutral-900 placeholder:text-neutral-500 ${focus}`;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Fixed demo accounts. Role comes ONLY from these credentials.
   Admin is hidden unless the URL is /login?access=admin */
const DEMO = [
  { role: 'user', label: 'Public user', email: 'user@polaris.demo', pw: 'User@123' },
  { role: 'contributor', label: 'Contributor', email: 'contributor@polaris.demo', pw: 'Contrib@123' },
  { role: 'scientist', label: 'Scientist reviewer', email: 'scientist@polaris.demo', pw: 'Scientist@123' },
  { role: 'editor', label: 'Communication Cell', email: 'editor@polaris.demo', pw: 'Editor@123' },
  { role: 'admin', label: 'Admin', email: 'admin@polaris.demo', pw: 'Admin@123', hidden: true }
];

const hide = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden'
};

const Google = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.57-5.17 3.57-8.81Z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3a7.2 7.2 0 0 1-10.7-3.78H1.34v3.09A12 12 0 0 0 12 24Z" />
    <path fill="#FBBC05" d="M5.37 14.31a7.2 7.2 0 0 1 0-4.62V6.6H1.34a12 12 0 0 0 0 10.8l4.03-3.09Z" />
    <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.58 1.8l3.43-3.43A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.34 6.6l4.03 3.1A7.2 7.2 0 0 1 12 4.77Z" />
  </svg>
);

const Facebook = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path fill="#1877F2" d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.88V12h3.34l-.53 3.47h-2.81v8.38A12 12 0 0 0 24 12Z" />
    <path fill="#fff" d="M16.67 15.47 17.2 12h-3.34V9.75c0-.95.47-1.88 1.96-1.88h1.51V4.92s-1.38-.23-2.69-.23c-2.74 0-4.53 1.66-4.53 4.67V12H7.08v3.47h3.04v8.38a12.1 12.1 0 0 0 3.74 0v-8.38h2.81Z" />
  </svg>
);

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function Social({ onOAuth }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {[
          ['google', 'Google', <Google />],
          ['facebook', 'Facebook', <Facebook />]
        ].map(([k, l, i]) => (
          <button
            key={k}
            type="button"
            onClick={() => onOAuth(k)}
            className={`flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 ${focus}`}
          >
            {i}
            {l}
          </button>
        ))}
      </div>

      <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-500">
        <span className="h-px flex-1 bg-neutral-200" />
        or with email
        <span className="h-px flex-1 bg-neutral-200" />
      </div>
    </div>
  );
}

function ImagePanel({ kind, title, text, points, className = '' }) {
  return (
    <div className={`relative min-h-[240px] overflow-hidden bg-ink ${className}`}>
      <Photo kind={kind} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

      <div className="relative flex h-full flex-col justify-end p-8 text-white">
        <h2 className="font-serif text-3xl font-black">{title}</h2>
        <p className="mt-2 text-white/85">{text}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-white/90">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span aria-hidden="true">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function strength(p) {
  let s = 0;
  if (p.length >= 8) s++;
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++;
  if (/\d/.test(p)) s++;
  if (/[^A-Za-z0-9]/.test(p)) s++;
  return s;
}

function LoginForm({ onStart, onOAuth, onSwitch, showAdmin }) {
  const [f, setF] = useState({ email: '', pw: '' });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState({});

  const fill = (a) => {
    setF({ email: a.email, pw: a.pw });
    setShow(true);
    setErr({});
  };

  const submit = (e) => {
    e.preventDefault();

    const x = {};
    const email = f.email.trim().toLowerCase();

    if (!EMAIL.test(email)) {
      x.email = 'Enter a valid email address.';
    }

    if (f.pw.length < 6) {
      x.pw = 'Password must be at least 6 characters.';
    }

    const acc = DEMO.find((a) => a.email === email);

    if (!x.pw && acc && acc.pw !== f.pw) {
      x.pw = 'Wrong password for this demo account.';
    }

    setErr(x);

    if (Object.keys(x).length) return;

    onStart({
      email,
      name: email.split('@')[0],
      role: acc ? acc.role : 'user',
      kind: 'login'
    });
  };

  return (
    <div className="flex flex-col justify-center p-8 md:p-10">
      <h1 className="font-serif text-3xl font-black text-ink">Welcome back</h1>

      <p className="mt-1 text-neutral-600">Log in to your POLARIS account.</p>

      <div className="mt-6">
        <Social onOAuth={onOAuth} />
      </div>

      <form onSubmit={submit} noValidate className="space-y-4">
        <Field id="l-email" label="Email" error={err.email}>
          <input
            id="l-email"
            type="email"
            autoComplete="email"
            value={f.email}
            onChange={(e) => setF({ ...f, email: e.target.value })}
            className={`${inputCls} ${err.email ? 'border-danger' : 'border-neutral-300'}`}
          />
        </Field>

        <Field id="l-pw" label="Password" error={err.pw}>
          <div className="relative">
            <input
              id="l-pw"
              type={show ? 'text' : 'password'}
              autoComplete="current-password"
              value={f.pw}
              onChange={(e) => setF({ ...f, pw: e.target.value })}
              className={`${inputCls} pr-16 ${err.pw ? 'border-danger' : 'border-neutral-300'}`}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              aria-pressed={show}
              className={`absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-semibold text-ink ${focus}`}
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>
        </Field>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-neutral-700">
            <input type="checkbox" className={`accent-[#0B1F3A] ${focus}`} />
            Remember me
          </label>

          <Link
            to="/reset"
            className={`font-semibold text-ink underline underline-offset-4 ${focus}`}
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className={`w-full rounded-lg bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-900 ${focus}`}
        >
          Log in
        </button>
      </form>

      <div className="mt-4 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Demo accounts, click to fill
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {DEMO.filter((a) => !a.hidden || showAdmin).map((a) => (
            <button
              key={a.role}
              type="button"
              onClick={() => fill(a)}
              className={`rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold text-ink hover:border-ink ${focus}`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-neutral-600">
        New to POLARIS?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className={`font-semibold text-ink underline underline-offset-4 ${focus}`}
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

function SignupForm({ onStart, onOAuth, onSwitch }) {
  const [f, setF] = useState({ name: '', email: '', pw: '', consent: false });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState({});

  const s = strength(f.pw);

  const submit = (e) => {
    e.preventDefault();

    const x = {};

    if (f.name.trim().length < 2) {
      x.name = 'Please enter your name.';
    }

    if (!EMAIL.test(f.email)) {
      x.email = 'Enter a valid email address.';
    }

    if (s < 2 || f.pw.length < 8) {
      x.pw = 'Use 8+ characters with letters and numbers.';
    }

    if (!f.consent) {
      x.consent = 'Please accept to continue.';
    }

    setErr(x);

    if (Object.keys(x).length) return;

    // Public sign-ups are always the "user" role.
    onStart({
      email: f.email.trim().toLowerCase(),
      name: f.name.trim(),
      role: 'user',
      kind: 'signup'
    });
  };

  return (
    <div className="flex flex-col justify-center p-8 md:p-10">
      <h1 className="font-serif text-3xl font-black text-ink">Create your account</h1>

      <p className="mt-1 text-neutral-600">Join the community exploring the poles.</p>

      <div className="mt-5">
        <Social onOAuth={onOAuth} />
      </div>

      <form onSubmit={submit} noValidate className="space-y-4">
        <Field id="s-name" label="Full name" error={err.name}>
          <input
            id="s-name"
            autoComplete="name"
            value={f.name}
            onChange={(e) => setF({ ...f, name: e.target.value })}
            className={`${inputCls} ${err.name ? 'border-danger' : 'border-neutral-300'}`}
          />
        </Field>

        <Field id="s-email" label="Email" error={err.email}>
          <input
            id="s-email"
            type="email"
            autoComplete="email"
            value={f.email}
            onChange={(e) => setF({ ...f, email: e.target.value })}
            className={`${inputCls} ${err.email ? 'border-danger' : 'border-neutral-300'}`}
          />
        </Field>

        <Field id="s-pw" label="Password" error={err.pw}>
          <div className="relative">
            <input
              id="s-pw"
              type={show ? 'text' : 'password'}
              autoComplete="new-password"
              value={f.pw}
              onChange={(e) => setF({ ...f, pw: e.target.value })}
              className={`${inputCls} pr-16 ${err.pw ? 'border-danger' : 'border-neutral-300'}`}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              aria-pressed={show}
              className={`absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-semibold text-ink ${focus}`}
            >
              {show ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="mt-2 flex items-center gap-1" aria-hidden="true">
            {[1, 2, 3, 4].map((n) => (
              <span
                key={n}
                className={`h-1.5 flex-1 rounded-full ${s >= n ? 'bg-ink' : 'bg-neutral-200'}`}
              />
            ))}

            <span className="ml-2 w-12 text-xs text-neutral-600">
              {['', 'Weak', 'Fair', 'Good', 'Strong'][s]}
            </span>
          </div>
        </Field>

        <div>
          <label className="flex items-start gap-2 text-sm text-neutral-700">
            <input
              type="checkbox"
              checked={f.consent}
              onChange={(e) => setF({ ...f, consent: e.target.checked })}
              className={`mt-1 accent-[#0B1F3A] ${focus}`}
            />

            <span>
              I agree to the{' '}
              <Link to="/terms" className="font-semibold text-ink underline">
                Terms
              </Link>{' '}
              and consent to data processing under the DPDP Act.
            </span>
          </label>

          {err.consent && (
            <p className="mt-1 text-sm text-danger" role="alert">
              {err.consent}
            </p>
          )}
        </div>

        <button
          type="submit"
          className={`w-full rounded-lg bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-900 ${focus}`}
        >
          Sign up
        </button>
      </form>

      <p className="mt-4 text-sm text-neutral-600">
        Already registered?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className={`font-semibold text-ink underline underline-offset-4 ${focus}`}
        >
          Log in
        </button>
      </p>
    </div>
  );
}

function OtpCard({ pending, code, onBack, onVerified }) {
  const [d, setD] = useState(Array(6).fill(''));
  const [err, setErr] = useState('');
  const [left, setLeft] = useState(30);
  const [ok, setOk] = useState(false);
  const [demo, setDemo] = useState(code);

  const refs = useRef([]);

  useEffect(() => {
    if (left <= 0) return;
    const t = setTimeout(() => setLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (!ok) return;
    const t = setTimeout(onVerified, 1800);
    return () => clearTimeout(t);
  }, [ok, onVerified]);

  const put = (i, v) => {
    v = v.replace(/\D/g, '').slice(-1);

    setD((x) => {
      const n = [...x];
      n[i] = v;
      return n;
    });

    setErr('');

    if (v && i < 5) {
      refs.current[i + 1]?.focus();
    }
  };

  const key = (i, e) => {
    if (e.key === 'Backspace' && !d[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  const paste = (e) => {
    const t = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);

    if (!t) return;

    e.preventDefault();

    setD(t.padEnd(6, ' ').split('').map((c) => c.trim()));

    refs.current[Math.min(t.length, 5)]?.focus();
  };

  const verify = (e) => {
    e.preventDefault();

    if (d.join('') === demo) {
      setOk(true);
    } else {
      setErr('That code is not correct. Try again.');
      setD(Array(6).fill(''));
      refs.current[0]?.focus();
    }
  };

  const resend = () => {
    setDemo(String(Math.floor(100000 + Math.random() * 900000)));
    setLeft(30);
    setD(Array(6).fill(''));
    setErr('');
  };

  return (
    <div className="grid overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card md:grid-cols-2">
      <ImagePanel
        kind="station"
        title={ok ? 'You are in' : 'Check your inbox'}
        text="One last step keeps your account and the science safe."
        points={[
          'Codes expire quickly',
          'We never share your email',
          'Sample data notice applies in demo'
        ]}
      />

      <div className="flex flex-col justify-center p-8 md:p-10">
        {ok ? (
          <div className="text-center" role="status">
            <span className="mx-auto grid h-20 w-20 animate-bounce place-items-center rounded-full bg-ink text-white motion-reduce:animate-none">
              <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m5 12 5 5 9-10" />
              </svg>
            </span>

            <h1 className="mt-5 font-serif text-3xl font-black text-ink">
              {pending.kind === 'signup' ? 'Account created' : 'Logged in'}
            </h1>

            <p className="mt-2 text-neutral-600">
              Welcome, {pending.name}. Taking you in...
            </p>
          </div>
        ) : (
          <form onSubmit={verify}>
            <h1 className="font-serif text-3xl font-black text-ink">Verify your email</h1>

            <p className="mt-1 text-neutral-600">
              We sent a 6-digit code to{' '}
              <strong className="text-ink">{pending.email}</strong>.
            </p>

            <p className="mt-3 rounded-lg border border-dashed border-neutral-400 bg-neutral-100 p-3 text-sm text-neutral-700">
              Demo mode: no email is sent. Your code is{' '}
              <strong className="font-mono text-ink">{demo}</strong>.
            </p>

            <div className="mt-6 flex justify-between gap-2" onPaste={paste}>
              {d.map((v, i) => (
                <input
                  key={i}
                  ref={(el) => (refs.current[i] = el)}
                  value={v}
                  onChange={(e) => put(i, e.target.value)}
                  onKeyDown={(e) => key(i, e)}
                  inputMode="numeric"
                  maxLength={1}
                  aria-label={`Digit ${i + 1}`}
                  className={`h-14 w-full min-w-0 rounded-lg border text-center text-2xl font-bold text-ink ${
                    err ? 'border-danger' : 'border-neutral-300'
                  } ${focus}`}
                />
              ))}
            </div>

            {err && (
              <p className="mt-2 text-sm text-danger" role="alert">
                {err}
              </p>
            )}

            <button
              type="submit"
              disabled={d.join('').length < 6}
              className={`mt-6 w-full rounded-lg bg-ink px-6 py-3 font-semibold text-white hover:bg-neutral-900 disabled:opacity-40 ${focus}`}
            >
              Verify and continue
            </button>

            <div className="mt-4 flex items-center justify-between text-sm">
              <button
                type="button"
                onClick={onBack}
                className={`font-semibold text-ink underline underline-offset-4 ${focus}`}
              >
                Change email
              </button>

              {left > 0 ? (
                <span className="text-neutral-500">Resend in {left}s</span>
              ) : (
                <button
                  type="button"
                  onClick={resend}
                  className={`font-semibold text-ink underline underline-offset-4 ${focus}`}
                >
                  Resend code
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function AuthPage() {
  const loc = useLocation();
  const nav = useNavigate();
  const { login } = useAuth();

  const showAdmin = new URLSearchParams(loc.search).get('access') === 'admin';

  const modeOf = () => (loc.pathname.startsWith('/signup') ? 'signup' : 'login');

  const [mode, setMode] = useState(modeOf());
  const [pending, setPending] = useState(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    setMode(modeOf());
  }, [loc.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const flip = () => nav(mode === 'login' ? '/signup' : '/login');

  const start = (p) => {
    setCode(String(Math.floor(100000 + Math.random() * 900000)));
    setPending(p);
  };

  const verified = () => {
    login(pending.email, pending.role);
    nav(pending.role === 'user' ? '/account' : '/admin');
  };

  const oauth = (provider) => {
    login(`${provider}.user@demo.polaris`, 'user');
    nav('/account');
  };

  return (
    <div className="bg-neutral-100 py-6 md:py-8">
      <div className="mx-auto max-w-6xl px-4">
        {pending ? (
          <OtpCard
            key={code}
            pending={pending}
            code={code}
            onBack={() => setPending(null)}
            onVerified={verified}
          />
        ) : (
          <div style={{ perspective: '2000px' }}>
            <div
              className="grid transition-transform duration-[900ms] ease-in-out motion-reduce:transition-none"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${mode === 'signup' ? 180 : 0}deg)`
              }}
            >
              {/* Front: login */}
              <div
                style={hide}
                inert={mode === 'signup' ? '' : undefined}
                aria-hidden={mode === 'signup'}
                className="col-start-1 row-start-1 grid overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card md:grid-cols-2"
              >
                <ImagePanel
                  kind="aurora"
                  title="Back to the ice"
                  text="Pick up where you left off: bookmarks, saved searches and alerts."
                  points={[
                    'Save reports and datasets',
                    'Get live expedition alerts',
                    'Track your quiz badges'
                  ]}
                />

                <LoginForm
                  onStart={start}
                  onOAuth={oauth}
                  onSwitch={flip}
                  showAdmin={showAdmin}
                />
              </div>

              {/* Back: signup */}
              <div
                style={{ ...hide, transform: 'rotateY(180deg)' }}
                inert={mode === 'login' ? '' : undefined}
                aria-hidden={mode === 'login'}
                className="col-start-1 row-start-1 grid overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card md:grid-cols-2"
              >
                <SignupForm onStart={start} onOAuth={oauth} onSwitch={flip} />

                <ImagePanel
                  kind="glacier"
                  className="order-first md:order-none"
                  title="Join the expedition"
                  text="Free for everyone. Explore, learn and contribute to polar science."
                  points={[
                    'Source-linked, scientist-reviewed content',
                    'Listen in your language',
                    'Contribute photos and field notes'
                  ]}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
