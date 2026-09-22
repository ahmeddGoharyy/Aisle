import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Details — Admin",
  description: "Admin view of a specific wedding.",
};

interface AdminWeddingDetailPageProps {
  params: { id: string };
}

export default function AdminWeddingDetailPage({ params }: AdminWeddingDetailPageProps) {
  return (
    <>
      <h1 className="section-heading">Wedding Details</h1>
      <p className="section-subheading">Admin drill-down for wedding ID: {params.id}</p>
      {/* TODO: Wedding detail admin view */}
      <div className="mt-8 card">
        <p className="text-gray-500">Wedding details coming soon.</p>
      </div>
    </>
  );
}
