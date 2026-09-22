import { Metadata } from "next";
import { GuestbookForm } from "@/components/wedding/GuestbookForm";
import { GuestbookEntry } from "@/components/wedding/GuestbookEntry";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Leave a message for the couple.",
};

interface NotesPageProps {
  params: { slug: string };
}

export default function NotesPage({ params }: NotesPageProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="section-heading text-center">Guestbook</h1>
      <p className="section-subheading text-center">
        Leave a message for the happy couple 💌
      </p>
      <div className="mt-8">
        <GuestbookForm weddingSlug={params.slug} />
      </div>
      {/* TODO: Fetch notes from DB with Realtime subscription */}
      <div className="mt-12 space-y-6">
        <GuestbookEntry
          authorName="Guest"
          message="Sample guestbook message"
          createdAt={new Date().toISOString()}
        />
      </div>
    </section>
  );
}
