import { Link } from 'react-router-dom';

const CARDS = [
  {
    title: 'Ice Cores and Climate',
    text: "Air trapped for hundreds of thousands of years reveals how Earth's climate has changed.",
    to: '/repository?q=ice+core',
    image:
      'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1000&q=85',
    alt: 'Frozen polar landscape',
  },
  {
    title: 'Life in the Southern Ocean',
    text: 'Discover how krill, penguins and marine ecosystems respond to a changing ocean.',
    to: '/repository?q=krill',
    image:
      'https://images.unsplash.com/photo-1551415923-a2297c7fda79?auto=format&fit=crop&w=1000&q=85',
    alt: 'Polar wildlife and ocean',
  },
  {
    title: 'Himalayan Glaciers',
    text: 'Explore how melting mountain glaciers affect rivers, ecosystems and communities.',
    to: '/regions/himalaya',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85',
    alt: 'Snow-covered Himalayan mountains',
  },
  {
    title: 'Antarctic Research',
    text: 'Explore scientific expeditions studying Antarctica, its ice sheets and environment.',
    to: '/repository?q=antarctica',
    image:
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85',
    alt: 'Ocean waves and polar waters',
  },
  {
    title: 'Arctic Ecosystems',
    text: 'Understand the changing Arctic environment and the species that depend on it.',
    to: '/repository?q=arctic',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85',
    alt: 'Northern polar sky',
  },
  {
    title: 'Polar Climate Change',
    text: 'Discover how polar observations help scientists understand global climate patterns.',
    to: '/repository?q=climate',
    image:
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1000&q=85',
    alt: 'Snow and ice in a cold environment',
  },
];

export default function ResearchCards() {
  return (
    <section
      aria-labelledby="research-title"
      className="mt-10 w-full min-w-0"
    >
      {/* Section heading */}
      <div className="flex items-end justify-between gap-4 px-0.5">
        <h2
          id="research-title"
          className="font-serif text-2xl font-black text-ink md:text-3xl"
        >
          Latest research themes
        </h2>

      </div>

      {/* Six research cards */}
      <div
        className="mt-6 grid grid-cols-1 gap-5
                   sm:grid-cols-2 lg:grid-cols-3"
      >
        {CARDS.map((card) => (
          <article
            key={card.title}
            className="group flex min-w-0 flex-col overflow-hidden
                       rounded-card border border-neutral-200
                       bg-white shadow-card
                       transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg
                       motion-reduce:transform-none
                       motion-reduce:transition-none"
          >
            {/* Image with 2px horizontal spacing */}
            <div className="px-[2px] pt-[2px]">
              <div className="relative h-48 overflow-hidden rounded-t-[inherit] bg-slate-100">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover
                             transition-transform duration-500
                             group-hover:scale-105
                             motion-reduce:transform-none"
                />

                {/* Subtle image overlay */}
                <div
                  className="pointer-events-none absolute inset-0
                             bg-gradient-to-t
                             from-slate-950/30 via-transparent
                             to-transparent"
                />
              </div>
            </div>

            {/* Card content */}
            <div className="flex flex-1 flex-col p-5">
              <h3
                className="font-serif text-xl font-black text-ink
                           transition-colors duration-200
                           group-hover:text-slate-700"
              >
                {card.title}
              </h3>

              <p className="mt-2 flex-1 leading-relaxed text-neutral-600">
                {card.text}
              </p>

              <Link
                to={card.to}
                className="mt-5 inline-flex items-center gap-2
                           self-start rounded-lg bg-ink px-5 py-2
                           font-semibold text-white
                           transition-all duration-200
                           hover:bg-neutral-800
                           focus-visible:outline-2
                           focus-visible:outline-offset-2
                           focus-visible:outline-ink"
              >
                Explore
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200
                             group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}