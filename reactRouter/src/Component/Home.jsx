import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full bg-slate-950 text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop"
          alt="Modern workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-sm text-gray-200">
                Welcome to my website
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Build.
              <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Learn.
              </span>
              Create.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              Explore my projects, learn about modern web development,
              cloud computing, DevOps, and discover what I am building.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/projects"
                className="rounded-xl bg-orange-600 px-7 py-4 text-center font-semibold shadow-lg shadow-orange-600/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                Explore Projects →
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-center font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Learn More
              </Link>

            </div>

          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Learn. Build. Grow.
          </h2>

          <p className="mt-4 text-gray-400">
            Explore different areas of technology and modern software
            development.
          </p>
        </div>


        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-white/10">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-3xl">
              💻
            </div>

            <h3 className="text-xl font-bold">
              Web Development
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Build modern and responsive web applications using
              React, JavaScript, Node.js and modern technologies.
            </p>

          </div>


          {/* Card 2 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/10">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
              ☁️
            </div>

            <h3 className="text-xl font-bold">
              Cloud & DevOps
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Work with AWS, Docker, Kubernetes, CI/CD pipelines
              and modern cloud infrastructure.
            </p>

          </div>


          {/* Card 3 */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-white/10">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-3xl">
              🎓
            </div>

            <h3 className="text-xl font-bold">
              Teaching & Learning
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Share knowledge, teach computer science and help
              students understand technology in a simple way.
            </p>

          </div>

        </div>

      </section>


      {/* ================= IMAGE SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          <div className="grid items-center lg:grid-cols-2">

            {/* Image */}
            <div className="h-80 lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Developer working"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="p-8 sm:p-12 lg:p-16">

              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                My Journey
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Turning ideas into real projects.
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Technology is not only about writing code. It is about
                solving problems, learning continuously and building
                useful things that make a difference.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-gray-200"
              >
                Read More →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-16 text-center shadow-2xl sm:px-16">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-orange-50">
            Check out my projects and discover what I have been
            working on.
          </p>

          <Link
            to="/projects"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-600 transition hover:scale-105"
          >
            View My Projects
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;