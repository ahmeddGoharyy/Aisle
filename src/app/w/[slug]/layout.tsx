import { ReactNode } from "react";
import { WeddingNav } from "@/components/wedding/WeddingNav";

interface WeddingLayoutProps {
  children: ReactNode;
  params: { slug: string };
}

export default function WeddingLayout({ children, params }: WeddingLayoutProps) {
  return (
    <>
      <WeddingNav slug={params.slug} />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
