"use client";

import { Button } from "@/components/ui/Button";

interface PhotoUploaderProps {
  weddingSlug: string;
}

export function PhotoUploader({ weddingSlug }: PhotoUploaderProps) {
  // TODO: Implement photo upload via Edge Function

  const handleUpload = () => {
    // Trigger file input
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.onchange = async (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files) return;
      // TODO: Upload files to Supabase Storage via Edge Function
      console.log(`Uploading ${files.length} files for wedding: ${weddingSlug}`);
    };
    input.click();
  };

  return (
    <Button onClick={handleUpload} size="sm">
      📷 Upload Photos
    </Button>
  );
}
