import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Your Love Story",
    description:
      "Share how you met, your journey together, and the moments that led to 'I do' — beautifully presented on your own micro-site page.",
    image: "/images/service-wedding.png",
  },
  {
    title: "Venue & Details",
    description:
      "Give guests everything in one place — venue directions, ceremony schedule, dress code, and all the important details with interactive maps.",
    image: "/images/service-venue.png",
  },
  {
    title: "Photo Gallery",
    description:
      "Let every guest contribute. A shared photo gallery where anyone can upload from their phone — no app downloads required. You moderate what goes live.",
    image: "/images/service-gallery.png",
  },
];

export function FeatureCards() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Features
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Everything Your Wedding
            <br />
            Needs, Built In
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Each wedding gets its own beautiful micro-site with a unique URL — like <span className="font-medium text-brand-dark">aisle.app/w/sarah-and-james</span>
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-heading text-xl font-semibold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features row */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "📝", title: "Digital Guestbook", desc: "Guests leave notes the couple treasures forever" },
            { icon: "🎨", title: "Custom Themes", desc: "Match your wedding aesthetic with custom accent colors" },
            { icon: "🔒", title: "Content Moderation", desc: "Approve photos and notes before they go live" },
            { icon: "📱", title: "Mobile-First", desc: "Guests access everything from their phones" },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-center transition-all duration-200 hover:border-brand-light hover:bg-brand-light/20">
              <span className="text-2xl">{item.icon}</span>
              <h4 className="mt-2 font-heading text-sm font-semibold text-brand-dark">{item.title}</h4>
              <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA under cards */}
        <div className="mt-12 text-center">
          <Link
            href="/create-event"
            className="btn-secondary inline-flex items-center gap-2 rounded-full border-brand-dark/20 px-8 py-3 text-brand-dark transition-all duration-300 hover:bg-brand-light hover:text-brand-dark"
          >
            Start Building Your Site
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
