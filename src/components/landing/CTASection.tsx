import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-light py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-dark/5" />
      <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-brand-accent/10" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 opacity-15">
        <svg viewBox="0 0 120 600" fill="none" className="h-full w-full">
          <ellipse cx="40" cy="100" rx="30" ry="15" fill="#003152" opacity="0.2" transform="rotate(-25 40 100)"/>
          <ellipse cx="50" cy="250" rx="25" ry="12" fill="#003152" opacity="0.15" transform="rotate(20 50 250)"/>
          <ellipse cx="35" cy="400" rx="28" ry="14" fill="#003152" opacity="0.2" transform="rotate(-15 35 400)"/>
          <ellipse cx="45" cy="520" rx="22" ry="11" fill="#003152" opacity="0.15" transform="rotate(25 45 520)"/>
        </svg>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 opacity-15">
        <svg viewBox="0 0 120 600" fill="none" className="h-full w-full">
          <ellipse cx="80" cy="80" rx="30" ry="15" fill="#003152" opacity="0.2" transform="rotate(25 80 80)"/>
          <ellipse cx="70" cy="220" rx="25" ry="12" fill="#003152" opacity="0.15" transform="rotate(-20 70 220)"/>
          <ellipse cx="85" cy="370" rx="28" ry="14" fill="#003152" opacity="0.2" transform="rotate(15 85 370)"/>
          <ellipse cx="75" cy="500" rx="22" ry="11" fill="#003152" opacity="0.15" transform="rotate(-25 75 500)"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
          Your Wedding Deserves Its Own Space
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-brand-dark/60">
          Join thousands of couples who chose Aisle to bring their guests together. Create your free wedding micro-site in minutes — no coding, no app downloads, no hassle.
        </p>

        {/* Pricing teaser */}
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-brand-dark/10 bg-white/60 p-6 backdrop-blur-sm sm:flex-row sm:justify-center">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-brand-dark">Start free</p>
            <p className="text-xs text-gray-500">1 wedding · 50 photos · 50 guests</p>
          </div>
          <div className="hidden h-8 w-px bg-brand-dark/10 sm:block" />
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-brand-dark">From $29</p>
            <p className="text-xs text-gray-500">Unlimited photos · custom themes</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/create-event"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Create Your Wedding Site — Free
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
