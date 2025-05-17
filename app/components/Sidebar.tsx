import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col h-screen bg-[#0C365A] text-white w-64 fixed top-0 left-0">
      {/* Logo */}
      <div className="p-6 mb-6">
        <div className="flex items-center text-2xl font-bold">
          <div className="mr-2 text-[#01D167]">
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L1 12h3v8h16v-8h3L12 2z" fill="currentColor" />
            </svg>
          </div>
          <span>aspire</span>
        </div>
        <p className="text-sm mt-2 text-gray-400">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              href="#"
              className="flex items-center py-3 px-6 text-white hover:bg-[#0B2F4E] transition-colors"
              aria-label="Go to home page"
              tabIndex={0}
            >
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
                  fill="currentColor"
                />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center py-3 px-6 text-[#01D167] bg-[#0B2F4E] hover:bg-[#0B2F4E] transition-colors"
              aria-label="Go to cards page"
              tabIndex={0}
            >
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                  fill="currentColor"
                />
              </svg>
              <span>Cards</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center py-3 px-6 text-white hover:bg-[#0B2F4E] transition-colors"
              aria-label="Go to payments page"
              tabIndex={0}
            >
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"
                  fill="currentColor"
                />
              </svg>
              <span>Payments</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center py-3 px-6 text-white hover:bg-[#0B2F4E] transition-colors"
              aria-label="Go to credit page"
              tabIndex={0}
            >
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
                  fill="currentColor"
                />
              </svg>
              <span>Credit</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center py-3 px-6 text-white hover:bg-[#0B2F4E] transition-colors"
              aria-label="Go to settings page"
              tabIndex={0}
            >
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  fill="currentColor"
                />
              </svg>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
