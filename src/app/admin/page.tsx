import { Metadata } from "next";
import { StatsCards } from "@/components/admin/StatsCards";
import { WeddingsTable } from "@/components/admin/WeddingsTable";

export const metadata: Metadata = {
  title: "Admin Console",
  description: "Platform administration dashboard.",
};

export default function AdminPage() {
  return (
    <>
      <h1 className="section-heading">Admin Dashboard</h1>
      <p className="section-subheading">Platform overview and management</p>
      <div className="mt-8">
        <StatsCards />
      </div>
      <div className="mt-8">
        <WeddingsTable />
      </div>
    </>
  );
}
