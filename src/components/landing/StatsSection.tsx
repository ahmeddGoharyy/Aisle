"use client";

import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatItem({ value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-bold text-white lg:text-6xl">
        {count}
        <span className="text-brand-accent">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-brand-light/70">
        {label}
      </p>
    </div>
  );
}

const stats = [
  { value: 1000, suffix: "+", label: "Weddings Created" },
  { value: 10000, suffix: "+", label: "Guests Connected" },
  { value: 100000, suffix: "+", label: "Photos Shared" },
  { value: 40, suffix: "%+", label: "Guest Engagement" },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 lg:py-24">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-[#003152] to-brand-dark opacity-90" />
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-brand-light/5" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-accent/5" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
