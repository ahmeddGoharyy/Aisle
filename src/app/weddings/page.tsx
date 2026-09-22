import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AuthGuard } from "@/components/auth/AuthGuard";

export const metadata: Metadata = {
  title: "My Weddings",
  description: "View and manage your weddings on Aisle.",
};

export default function WeddingsPage() {
  return (
    <AuthGuard>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="section-heading">My Weddings</h1>
        <p className="section-subheading">
          Weddings you&apos;re part of as a moderator or guest.
        </p>
        {/* TODO: Wedding list grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <p className="text-gray-500">No weddings yet.</p>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
