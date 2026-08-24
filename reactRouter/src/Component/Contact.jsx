import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================= CONTACT HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            Contact Me
          </p>

          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Let's start a
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              {" "}conversation
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Have a question, project idea, or just want to say hello?
            Feel free to send me a message.
          </p>

        </div>


        {/* ================= CONTACT CARD ================= */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl">

          <div className="grid lg:grid-cols-2">


            {/* ================= LEFT SIDE ================= */}
            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-14">

              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
                alt="People working together"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-950/90 via-slate-950/95 to-slate-950"></div>


              {/* Content */}
              <div className="relative z-10">

                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl">
                  👋
                </div>

                <h2 className="mt-8 text-3xl font-bold sm:text-4xl">
                  Get in touch
                </h2>

                <p className="mt-4 max-w-md leading-7 text-gray-400">
                  I'm always interested in hearing about new projects,
                  opportunities, collaborations, or interesting ideas.
                </p>


                {/* Contact Information */}
                <div className="mt-10 space-y-7">

                  {/* Location */}
                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      📍
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Location
                      </p>

                      <p className="mt-1 font-semibold">
                        Phnom Penh, Cambodia
                      </p>
                    </div>

                  </div>


                  {/* Email */}
                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      ✉️
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Email
                      </p>

                      <a
                        href="mailto:your-email@example.com"
                        className="mt-1 block font-semibold transition hover:text-orange-400"
                      >
                        your-email@example.com
                      </a>
                    </div>

                  </div>


                  {/* Phone */}
                  <div className="flex items-start gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                      📱
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Phone
                      </p>

                      <p className="mt-1 font-semibold">
                        +855 XX XXX XXX
                      </p>
                    </div>

                  </div>

                </div>


                {/* Social Links */}
                <div className="mt-12">

                  <p className="text-sm text-gray-500">
                    Follow me
                  </p>

                  <div className="mt-4 flex gap-3">

                    <a
                      href="https://github.com/mudasiranberlin"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-bold transition hover:-translate-y-1 hover:bg-white/20"
                    >
                      GH
                    </a>

                    <a
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-bold transition hover:-translate-y-1 hover:bg-white/20"
                    >
                      LI
                    </a>

                    <a
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 font-bold transition hover:-translate-y-1 hover:bg-white/20"
                    >
                      X
                    </a>

                  </div>

                </div>

              </div>

            </div>


            {/* ================= RIGHT SIDE FORM ================= */}
            <div className="bg-white p-8 text-slate-900 sm:p-12 lg:p-14">

              <div className="mb-8">

                <h2 className="text-2xl font-bold sm:text-3xl">
                  Send me a message
                </h2>

                <p className="mt-2 text-gray-500">
                  Fill out the form and I'll get back to you.
                </p>

              </div>


              <form className="space-y-5">

                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>


                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>


                {/* Phone */}
                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+855 XX XXX XXX"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>


                {/* Subject */}
                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="How can I help you?"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                </div>


                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>

                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  ></textarea>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-orange-600 to-pink-600 px-6 py-4 font-bold text-white shadow-lg shadow-orange-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-4xl text-center">

          <div className="h-px bg-white/10"></div>

          <p className="mt-10 text-gray-500">
            Prefer GitHub?
          </p>

          <a
            href="https://github.com/mudasiranberlin"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-lg font-semibold text-orange-400 transition hover:text-orange-300"
          >
            Check out my GitHub profile →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Contact;