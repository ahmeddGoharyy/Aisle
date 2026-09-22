interface WeddingHeroProps {
  slug: string;
  coupleNames?: string;
  eventDate?: string;
  heroImageUrl?: string;
}

export function WeddingHero({ slug, coupleNames, eventDate, heroImageUrl }: WeddingHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-brand-primary/10 to-transparent">
      {heroImageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        />
      )}
      <div className="relative z-10 text-center">
        <h1 className="font-accent text-6xl text-brand-primary md:text-8xl">
          {coupleNames || slug}
        </h1>
        {eventDate && (
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{eventDate}</p>
        )}
      </div>
    </section>
  );
}
