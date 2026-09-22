import { WeddingHero } from "@/components/wedding/WeddingHero";

interface WeddingPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: WeddingPageProps) {
  return {
    title: `Wedding — ${params.slug}`,
    description: `View the wedding page for ${params.slug}`,
  };
}

export default function WeddingPage({ params }: WeddingPageProps) {
  return (
    <>
      <WeddingHero slug={params.slug} />
      {/* TODO: Wedding micro-landing content */}
      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Welcome to this wedding! Explore the love story, venue, photo gallery, and guestbook.
        </p>
      </section>
    </>
  );
}
