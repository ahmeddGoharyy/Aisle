"use client";

import { Photo } from "@/types/wedding.types";
import { PhotoCard } from "./PhotoCard";

interface PhotoGridProps {
  weddingId: string;
  initialPhotos: Photo[];
  canUpload: boolean;
}

export function PhotoGrid({ initialPhotos }: PhotoGridProps) {
  // TODO: Add Realtime subscription for live updates

  if (initialPhotos.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
        <div className="text-center">
          <p className="text-lg text-gray-400">No photos yet</p>
          <p className="mt-1 text-sm text-gray-400">Be the first to share a moment!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-stagger columns-2 gap-4 sm:columns-3 lg:columns-4">
      {initialPhotos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
