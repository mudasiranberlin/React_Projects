import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Contact from "./Contact";
import Projects from "./Project";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative block py-2 text-sm font-semibold transition duration-300 ${
      isActive
        ? "text-orange-600"
        : "text-gray-700 hover:text-orange-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >

            {/* Logo */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-xl font-bold text-white shadow-lg shadow-orange-500/20">
              M
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">
                Mudasir Ahmad
              </h1>

              <p className="text-xs text-gray-500">
                Developer & Lecturer
              </p>
            </div>

          </Link>


          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:block">

            <ul className="flex items-center gap-8">

              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/github" className={navLinkClass}>
                  GitHub
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>

               <li>
                <NavLink to="/project" className={navLinkClass}>
                  Projects
                </NavLink>
              </li>

               
            </ul>

          </div>


          {/* ================= DESKTOP BUTTONS ================= */}
          <div className="hidden items-center gap-3 lg:flex">

            <a
              href="https://github.com/mudasiranberlin"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              GitHub
            </a>

            <Link
              to="/contact"
              className="rounded-xl bg-gradient-to-r from-orange-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Me →
            </Link>

          </div>


          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label="Toggle navigation"
          >

            {isOpen ? (
              /* X icon */
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="border-t border-gray-100 pb-6 pt-4 lg:hidden">

            <ul className="space-y-2">

              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass}
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/github"
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass}
                >
                  GitHub
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass}
                >
                  Contact
                </NavLink>
              </li>

            </ul>


            {/* Mobile CTA */}
            <div className="mt-5 flex gap-3">

              <a
                href="https://github.com/mudasiranberlin"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700"
              >
                GitHub
              </a>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-xl bg-gradient-to-r from-orange-600 to-pink-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Me
              </Link>

            </div>

          </div>
        )}

      </nav>

    </header>
  );
}

export default Header;