import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToastProvider } from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: {
    default: "Aisle — Your Wedding, Together",
    template: "%s | Aisle",
  },
  description:
    "A beautiful all-in-one wedding platform. Share your love story, venue details, photo gallery, and guestbook with your guests.",
  keywords: ["wedding", "wedding website", "photo sharing", "guestbook", "wedding planner"],
  openGraph: {
    title: "Aisle — Your Wedding, Together",
    description: "The all-in-one wedding platform for couples and their guests.",
    type: "website",
    locale: "en_US",
    siteName: "Aisle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-body">
        <ThemeProvider>
          <AuthProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
