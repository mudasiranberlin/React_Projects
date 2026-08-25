import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= ABOUT HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-orange-500 to-pink-600 opacity-20 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Developer working"
                className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>


          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              About Me
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Passionate about
              <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Technology & Teaching
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I am a Computer Science professional passionate about
              software development, cloud computing, DevOps and
              teaching.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I enjoy building real-world applications and helping
              students understand complex technical concepts through
              simple and practical examples.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/project"
                className="rounded-xl bg-orange-600 px-7 py-3 text-center font-semibold transition hover:-translate-y-1 hover:bg-orange-500"
              >
                View My Projects →
              </Link>

              <a
                href="https://github.com/mudasiranberlin"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 text-center font-semibold transition hover:bg-white/10"
              >
                GitHub Profile
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              My Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Technologies I Work With
            </h2>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Skill 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-orange-500/50">
              <div className="text-4xl">⚛️</div>

              <h3 className="mt-5 text-xl font-bold">
                React
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Building modern and responsive user interfaces.
              </p>
            </div>


            {/* Skill 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-blue-500/50">
              <div className="text-4xl">☁️</div>

              <h3 className="mt-5 text-xl font-bold">
                AWS
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Cloud infrastructure, services and deployment.
              </p>
            </div>


            {/* Skill 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-green-500/50">
              <div className="text-4xl">🐳</div>

              <h3 className="mt-5 text-xl font-bold">
                DevOps
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Docker, Kubernetes, CI/CD and automation.
              </p>
            </div>


            {/* Skill 4 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-purple-500/50">
              <div className="text-4xl">🎓</div>

              <h3 className="mt-5 text-xl font-bold">
                Teaching
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Making computer science simple and practical.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= JOURNEY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              My Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Learning by building real things
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I believe the best way to learn technology is to
              combine theory with practical experience. Whether it
              is developing an application, deploying it to AWS,
              creating a Docker container or managing Kubernetes,
              every project is an opportunity to learn something new.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Practical Learning
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Focus on real projects and hands-on experience.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Continuous Improvement
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Always learning new technologies and techniques.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold">
                    Sharing Knowledge
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Helping others understand technology more easily.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
              alt="Team working together"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-16 text-center shadow-2xl sm:px-16">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's build something great.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-orange-50">
            Explore my projects and see what I have been working on.
          </p>

          <Link
            to="/project"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-600 transition hover:scale-105"
          >
            Explore Projects →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;