import { Metadata } from "next";
import { VenueCard } from "@/components/wedding/VenueCard";
import { WeddingDetailsList } from "@/components/wedding/WeddingDetailsList";

export const metadata: Metadata = {
  title: "Venue & Details",
  description: "View the wedding venue and event details.",
};

interface VenuePageProps {
  params: { slug: string };
}

export default function VenuePage({ params }: VenuePageProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="section-heading text-center">Venue & Details</h1>
      <p className="section-subheading text-center">Everything you need to know</p>
      <div className="mt-12 space-y-8">
        {/* TODO: Fetch venue and wedding_details from DB */}
        <VenueCard
          name="The Grand Ballroom"
          address="123 Wedding Lane, Love City"
        />
        <WeddingDetailsList
          details={[
            { key: "Dress Code", value: "Semi-formal" },
            { key: "Ceremony", value: "4:00 PM" },
            { key: "Reception", value: "6:00 PM" },
          ]}
        />
      </div>
    </section>
  );
}
