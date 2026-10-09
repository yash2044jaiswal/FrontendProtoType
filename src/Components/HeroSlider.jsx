import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    title: 'Antarctic ice shelves',
    text: 'Follow how India studies the edge of the frozen continent.',
    to: '/regions/antarctic',
    label: 'Explore Antarctic',
    image:
      'https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=2400&q=90',
    alt: 'Antarctic ice shelves and frozen coastline',
  },
  {
    title: 'Southern Ocean voyages',
    text: 'Ship tracks, ocean data and findings from every research cruise.',
    to: '/globe?status=live',
    label: 'See live expeditions',
    image:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2400&q=90',
    alt: 'Research vessel and polar ocean landscape',
  },
  {
    title: 'Himadri, in the Arctic',
    text: "India's Arctic research station at Ny-Alesund, Svalbard.",
    to: '/stations/himadri',
    label: 'Visit the station',
    image:
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=2400&q=90',
    alt: 'Arctic landscape surrounded by snow and mountains',
  },
  {
    title: 'Aurora over the poles',
    text: 'Light, ice and sky: photos and clips from the field.',
    to: '/media',
    label: 'Open media gallery',
    image:
      'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=2400&q=90',
    alt: 'Aurora illuminating the polar night sky',
  },
  {
    title: 'Himalayan glaciers',
    text: 'The third pole: how mountain ice feeds rivers across Asia.',
    to: '/regions/himalaya',
    label: 'Explore Himalaya',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=90',
    alt: 'Snow-covered Himalayan mountains and glaciers',
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (d) => {
    setI((n) => (n + d + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (
      paused ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const id = setInterval(() => {
      setI((n) => (n + 1) % SLIDES.length);
    }, 5500);

    return () => clearInterval(id);
  }, [paused]);

  const btn =
    'absolute top-1/2 z-10 grid h-11 w-11 ' +
    '-translate-y-1/2 place-items-center rounded-full ' +
    'bg-white/90 text-xl text-ink shadow-card ' +
    'transition-all duration-200 hover:scale-105 hover:bg-white ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 ' +
    'focus-visible:outline-white';

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Polar highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-[420px] overflow-hidden rounded-card
                 border border-neutral-200 shadow-card
                 md:h-[480px]"
    >
      {SLIDES.map((s, n) => (
        <div
          key={s.title}
          aria-hidden={n !== i}
          className={`absolute inset-0 transition-opacity duration-700
            motion-reduce:transition-none
            ${n === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          {/* HD Background Image */}
          <img
            src={s.image}
            alt={s.alt}
            loading={n === 0 ? 'eager' : 'lazy'}
            fetchPriority={n === 0 ? 'high' : 'auto'}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Text readability overlay */}
          <div
            className="absolute inset-0
                       bg-gradient-to-r
                       from-ink/80 via-ink/30 to-transparent"
          />

          {/* Slight bottom darkening for readability */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2
                       bg-gradient-to-t from-ink/40 to-transparent"
          />

          {/* Slide content */}
          <div
            className="absolute bottom-0 left-0 z-[2] max-w-xl
                       p-8 text-white md:p-12"
          >
            <h2 className="font-serif text-3xl font-black md:text-4xl">
              {s.title}
            </h2>

            <p className="mt-3 text-white/90">
              {s.text}
            </p>

            <Link
              to={s.to}
              tabIndex={n === i ? 0 : -1}
              className="mt-5 inline-block rounded-lg bg-white
                         px-5 py-2.5 font-semibold text-ink
                         transition-all duration-200
                         hover:-translate-y-0.5 hover:bg-neutral-100
                         hover:shadow-lg
                         focus-visible:outline-2
                         focus-visible:outline-offset-2
                         focus-visible:outline-white"
            >
              {s.label}
            </Link>
          </div>
        </div>
      ))}

      {/* Previous */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className={`${btn} left-4`}
      >
        ‹
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className={`${btn} right-4`}
      >
        ›
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 right-6 z-10 flex gap-2">
        {SLIDES.map((s, n) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Show slide ${n + 1}: ${s.title}`}
            aria-current={n === i}
            className={`h-2.5 rounded-full transition-all duration-300
              ${
                n === i
                  ? 'w-7 bg-white'
                  : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </section>
  );
}

