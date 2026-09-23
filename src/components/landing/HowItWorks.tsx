const steps = [
  {
    number: "01",
    title: "Create Your Site",
    description:
      "Sign up and create your wedding in minutes. Add your love story, venue details, schedule, and dress code — all in a beautiful micro-site with a unique URL.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Invite Your Guests",
    description:
      "Share your unique wedding link via WhatsApp, text, or email. Guests access everything from their phones — no app download needed, no account required.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Guests Contribute",
    description:
      "On the big day, guests upload photos from their phones and leave heartfelt guestbook messages. Everything appears in real time for everyone to see.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Cherish Forever",
    description:
      "After the wedding, your micro-site becomes a digital keepsake — all photos, messages, and memories preserved in one beautiful place you can revisit anytime.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left side - heading */}
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-accent">
              How It Works
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              From Setup to Celebration in Minutes
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              Aisle is designed to be effortless. A couple can create their wedding, customize their micro-site, and invite guests in under 10 minutes. No coding, no hosting, no hassle.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand-dark">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark">aisle.app/w/your-names</p>
                <p className="text-xs text-gray-500">Your unique wedding URL</p>
              </div>
            </div>
          </div>

          {/* Right side - step cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-light hover:shadow-elevated"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-brand-dark transition-colors duration-300 group-hover:bg-brand-dark group-hover:text-white">
                  {step.icon}
                </div>
                <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Step {step.number}
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
