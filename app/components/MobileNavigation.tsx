import Link from "next/link";

export default function MobileNavigation() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-5 h-16">
        <Link
          href="#"
          className="flex flex-col items-center justify-center text-gray-500"
          aria-label="Go to home page"
          tabIndex={0}
        >
          <svg
            className="w-6 h-6 mb-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs">Home</span>
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center justify-center text-[#01D167]"
          aria-label="Go to cards page"
          tabIndex={0}
        >
          <svg
            className="w-6 h-6 mb-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs">Cards</span>
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center justify-center text-gray-500"
          aria-label="Go to payments page"
          tabIndex={0}
        >
          <svg
            className="w-6 h-6 mb-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs">Payments</span>
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center justify-center text-gray-500"
          aria-label="Go to credit page"
          tabIndex={0}
        >
          <svg
            className="w-6 h-6 mb-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs">Credit</span>
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center justify-center text-gray-500"
          aria-label="Go to profile page"
          tabIndex={0}
        >
          <svg
            className="w-6 h-6 mb-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  );
}
