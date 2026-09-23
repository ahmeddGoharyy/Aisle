"use client";

import { ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
  requiredRole?: string;
}

/**
 * AuthGuard wraps protected pages and redirects unauthenticated users.
 * Currently a passthrough stub — will be wired to Supabase auth later.
 */
export function AuthGuard({ children }: AuthGuardProps) {
  // TODO: Check auth state via useAuth() hook and redirect to /login if not authenticated
  return <>{children}</>;
}
