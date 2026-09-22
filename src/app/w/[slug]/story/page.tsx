import { Metadata } from "next";
import { LoveStorySection } from "@/components/wedding/LoveStorySection";

export const metadata: Metadata = {
  title: "Love Story",
  description: "Read the couple's love story.",
};

interface StoryPageProps {
  params: { slug: string };
}

export default function StoryPage({ params }: StoryPageProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="section-heading text-center">Our Love Story</h1>
      <p className="section-subheading text-center">How it all began…</p>
      {/* TODO: Fetch love_story_sections from DB */}
      <div className="mt-12 space-y-16">
        <LoveStorySection
          title="How We Met"
          body="Every great love story has a beginning..."
          orderIndex={0}
        />
      </div>
    </section>
  );
}
