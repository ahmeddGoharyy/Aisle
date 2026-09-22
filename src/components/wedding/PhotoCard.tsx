"use client";

import { Photo } from "@/types/wedding.types";

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-soft transition-shadow duration-200 hover:shadow-elevated">
      <img
        src={photo.storage_path}
        alt={photo.caption || "Wedding photo"}
        className="w-full object-cover"
        loading="lazy"
      />
      {photo.caption && (
        <div className="bg-white px-3 py-2 dark:bg-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-300">{photo.caption}</p>
        </div>
      )}
    </div>
  );
}
