"use client";

import { cn } from "@/lib/utils/cn";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onDismiss?: () => void;
}

const typeStyles = {
  success: "border-green-500 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300",
  error: "border-red-500 bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300",
  info: "border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
  warning: "border-yellow-500 bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
};

const typeIcons = {
  success: "✓",
  error: "✕",
  info: "ℹ",
  warning: "⚠",
};

export function Toast({ message, type = "info", onDismiss }: ToastProps) {
  return (
    <div
      className={cn(
        "animate-slide-in-right flex items-center gap-3 rounded-lg border-l-4 px-4 py-3 shadow-elevated",
        typeStyles[type]
      )}
      role="alert"
    >
      <span className="text-lg">{typeIcons[type]}</span>
      <p className="flex-1 text-sm font-medium">{message}</p>
      {onDismiss && (
        <button onClick={onDismiss} className="text-current opacity-50 hover:opacity-100" aria-label="Dismiss">
          ✕
        </button>
      )}
    </div>
  );
}
