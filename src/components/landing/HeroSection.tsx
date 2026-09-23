import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-light">
      {/* Decorative leaf SVGs */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-48 opacity-20">
        <svg viewBox="0 0 200 800" fill="none" className="h-full w-full">
          <path d="M80 0C80 0 20 100 40 200C60 300 10 350 30 450C50 550 20 600 40 700C60 800 80 800 80 800" stroke="#003152" strokeWidth="1.5" fill="none"/>
          <ellipse cx="50" cy="120" rx="30" ry="15" fill="#003152" opacity="0.15" transform="rotate(-30 50 120)"/>
          <ellipse cx="35" cy="200" rx="25" ry="12" fill="#003152" opacity="0.12" transform="rotate(20 35 200)"/>
          <ellipse cx="55" cy="320" rx="28" ry="14" fill="#003152" opacity="0.1" transform="rotate(-15 55 320)"/>
          <ellipse cx="30" cy="450" rx="22" ry="11" fill="#003152" opacity="0.15" transform="rotate(25 30 450)"/>
          <ellipse cx="50" cy="580" rx="30" ry="15" fill="#003152" opacity="0.12" transform="rotate(-20 50 580)"/>
          <ellipse cx="40" cy="700" rx="26" ry="13" fill="#003152" opacity="0.1" transform="rotate(15 40 700)"/>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-48 opacity-20">
        <svg viewBox="0 0 200 800" fill="none" className="h-full w-full">
          <path d="M120 0C120 0 180 100 160 200C140 300 190 350 170 450C150 550 180 600 160 700C140 800 120 800 120 800" stroke="#003152" strokeWidth="1.5" fill="none"/>
          <ellipse cx="150" cy="150" rx="30" ry="15" fill="#003152" opacity="0.15" transform="rotate(30 150 150)"/>
          <ellipse cx="165" cy="280" rx="25" ry="12" fill="#003152" opacity="0.12" transform="rotate(-20 165 280)"/>
          <ellipse cx="145" cy="400" rx="28" ry="14" fill="#003152" opacity="0.1" transform="rotate(15 145 400)"/>
          <ellipse cx="170" cy="530" rx="22" ry="11" fill="#003152" opacity="0.15" transform="rotate(-25 170 530)"/>
          <ellipse cx="150" cy="660" rx="30" ry="15" fill="#003152" opacity="0.12" transform="rotate(20 150 660)"/>
        </svg>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-28">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Your Wedding,
            <span className="block text-brand-dark/70">All in One Place.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-brand-dark/60 lg:mx-0">
            Give your guests one beautiful link with everything they need — your love story, venue details, photo gallery, and digital guestbook. No apps to download, no scattered messages.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/create-event"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Create Your Wedding Site
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-brand-dark/70 transition-colors duration-200 hover:text-brand-dark"
            >
              See How It Works
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto w-full max-w-lg">
            {/* Decorative frame shapes */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-brand-accent/30" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-brand-accent/10" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-couple.png"
                alt="Happy couple celebrating their wedding"
                width={600}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
                  <svg className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-dark">1,000+</p>
                  <p className="text-xs text-gray-500">Weddings Created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
