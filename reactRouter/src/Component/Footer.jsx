import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">

            <Link to="/" className="inline-flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-xl font-bold shadow-lg shadow-orange-500/20">
                M
              </div>

              <span className="text-2xl font-bold">
                Mudasir
              </span>

            </Link>

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              Computer Science Lecturer and Developer passionate about
              web development, cloud computing, DevOps and modern
              technologies.
            </p>


            {/* Social Links */}
            <div className="mt-7 flex gap-3">

              <a
                href="https://github.com/mudasiranberlin"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold transition hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/10"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10"
                aria-label="LinkedIn"
              >
                IN
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold transition hover:-translate-y-1 hover:border-gray-400 hover:bg-white/10"
                aria-label="X"
              >
                X
              </a>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Quick Links
            </h2>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/github"
                  className="text-gray-400 transition hover:text-white"
                >
                  GitHub
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= TECHNOLOGIES ================= */}
          <div>

            <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Technologies
            </h2>

            <ul className="mt-6 space-y-4">

              <li className="text-gray-400">
                React
              </li>

              <li className="text-gray-400">
                JavaScript
              </li>

              <li className="text-gray-400">
                Node.js
              </li>

              <li className="text-gray-400">
                AWS & DevOps
              </li>

            </ul>

          </div>

        </div>


        {/* ================= NEWSLETTER / CTA ================= */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-orange-600/10 to-pink-600/10 p-6 sm:p-8">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>

              <h3 className="text-xl font-bold">
                Let's build something together.
              </h3>

              <p className="mt-2 text-gray-400">
                Have an idea or project? Feel free to get in touch.
              </p>

            </div>

            <Link
              to="/contact"
              className="shrink-0 rounded-xl bg-gradient-to-r from-orange-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-1"
            >
              Contact Me →
            </Link>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Mudasir Ahmad. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="#"
              className="transition hover:text-white"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;