import { Metadata } from "next";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ContentQueue } from "@/components/moderator/ContentQueue";
import { GuestRoster } from "@/components/moderator/GuestRoster";

export const metadata: Metadata = {
  title: "Moderator Console",
  description: "Manage content and guests for this wedding.",
};

interface ModeratePageProps {
  params: { slug: string };
}

export default function ModeratePage({ params }: ModeratePageProps) {
  return (
    <AuthGuard requiredRole="moderator">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="section-heading">Moderator Console</h1>
        <p className="section-subheading">
          Manage photos, notes, and guests for this wedding.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ContentQueue weddingSlug={params.slug} />
          <GuestRoster weddingSlug={params.slug} />
        </div>
      </section>
    </AuthGuard>
  );
}
