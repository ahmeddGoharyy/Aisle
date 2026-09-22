import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Wedding Login",
  description: "Sign in to access this wedding.",
};

interface WeddingLoginPageProps {
  params: { slug: string };
}

export default function WeddingLoginPage({ params }: WeddingLoginPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-accent text-4xl text-brand-primary">Welcome</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Sign in to access the wedding for <strong>{params.slug}</strong>
          </p>
        </div>
        <LoginForm redirectTo={`/w/${params.slug}`} />
      </div>
    </main>
  );
}
