import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-20 lg:px-8">
        {/* Image Side */}
        <div className="relative flex-1">
          <div className="relative mx-auto max-w-md">
            {/* Decorative circle behind image */}
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-brand-light/50" />
            <div className="relative overflow-hidden rounded-3xl shadow-elevated">
              <Image
                src="/images/about-wedding.png"
                alt="Beautiful wedding ceremony with floral arch"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-brand-dark p-5 text-white shadow-elevated">
              <p className="text-3xl font-bold">40%+</p>
              <p className="text-sm text-brand-light/80">Guest Engagement</p>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="flex-1 text-center lg:text-left">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Why Aisle
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            One Beautiful Link for Your Entire Wedding
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-500">
            Stop scattering your wedding details across WhatsApp groups, Instagram stories, and email chains. Aisle gives every couple a stunning micro-site — a single link where guests find your love story, venue directions, photo gallery, and guestbook.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Guests can upload photos from their phones (no app needed), leave heartfelt notes, and stay in the loop — all in real time. You stay in control with built-in moderation tools.
          </p>
          <div className="mt-8">
            <Link
              href="#services"
              className="btn-secondary inline-flex items-center gap-2 rounded-full border-brand-dark/20 px-8 py-3 text-brand-dark transition-all duration-300 hover:bg-brand-light"
            >
              Explore Features
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
