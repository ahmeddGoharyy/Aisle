import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="font-accent text-2xl text-brand-primary">
              Aisle
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              The all-in-one wedding platform for couples and their guests.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Product</h4>
            <ul className="mt-3 space-y-2">
              <li><Link href="/create-event" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Create Event</Link></li>
              <li><Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li><span className="text-sm text-gray-500">Privacy Policy</span></li>
              <li><span className="text-sm text-gray-500">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-400 dark:border-gray-700">
          &copy; {new Date().getFullYear()} Aisle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
