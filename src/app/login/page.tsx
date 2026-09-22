import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Aisle account to access your weddings.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-accent text-5xl text-brand-primary">Aisle</h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Sign in to access your weddings
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
