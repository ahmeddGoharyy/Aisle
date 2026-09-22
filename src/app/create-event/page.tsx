import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AuthGuard } from "@/components/auth/AuthGuard";

export const metadata: Metadata = {
  title: "Create Event",
  description: "Create a new wedding event on Aisle.",
};

export default function CreateEventPage() {
  return (
    <AuthGuard requiredRole="admin">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="section-heading">Create a Wedding</h1>
        <p className="section-subheading">
          Set up a new wedding with love story, venue details, and guest invitations.
        </p>
        {/* TODO: Create Event Wizard form */}
        <div className="mt-8 card">
          <p className="text-gray-500">Event creation wizard coming soon.</p>
        </div>
      </main>
    </AuthGuard>
  );
}
