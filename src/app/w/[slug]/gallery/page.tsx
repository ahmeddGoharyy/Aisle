import { Metadata } from "next";
import { PhotoGrid } from "@/components/wedding/PhotoGrid";
import { PhotoUploader } from "@/components/wedding/PhotoUploader";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse and share wedding photos.",
};

interface GalleryPageProps {
  params: { slug: string };
}

export default function GalleryPage({ params }: GalleryPageProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="section-heading">Photo Gallery</h1>
          <p className="section-subheading">Captured moments from the celebration</p>
        </div>
        <PhotoUploader weddingSlug={params.slug} />
      </div>
      {/* TODO: Fetch photos from DB with Realtime subscription */}
      <PhotoGrid weddingId="" initialPhotos={[]} canUpload={true} />
    </section>
  );
}
