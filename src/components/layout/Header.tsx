import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-accent text-3xl text-brand-primary">
          Aisle
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/weddings" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
            My Weddings
          </Link>
          <Link href="/login" className="btn-secondary text-sm">
            Login
          </Link>
          <Link href="/create-event" className="btn-primary text-sm">
            Create Event
          </Link>
        </nav>
      </div>
    </header>
  );
}
