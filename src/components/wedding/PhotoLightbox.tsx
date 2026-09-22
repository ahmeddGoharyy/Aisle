"use client";

interface PhotoLightboxProps {
  imageUrl: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoLightbox({ imageUrl, caption, isOpen, onClose }: PhotoLightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-2xl text-white/80 hover:text-white"
        aria-label="Close lightbox"
      >
        ✕
      </button>
      <div className="max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={caption || "Photo"} className="max-h-[85vh] rounded-lg object-contain" />
        {caption && <p className="mt-3 text-center text-sm text-white/80">{caption}</p>}
      </div>
    </div>
  );
}
