import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-light/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-accent text-3xl text-brand-dark">
          Aisle
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-brand-dark transition-colors hover:text-brand-accent"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-brand-dark"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-brand-dark"
          >
            Services
          </Link>
          <Link
            href="/weddings"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-brand-dark"
          >
            My Weddings
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-500 transition-colors hover:text-brand-dark"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-brand-dark transition-colors hover:text-brand-accent md:inline-block"
          >
            Login
          </Link>
          <Link
            href="/create-event"
            className="rounded-full bg-brand-dark px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:bg-brand-primary-light hover:shadow-elevated active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
