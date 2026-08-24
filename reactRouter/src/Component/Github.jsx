import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/mudasiranberlin")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub profile");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load GitHub profile");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[600px] items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-orange-500"></div>

          <p className="mt-4 text-gray-400">
            Loading GitHub profile...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[600px] items-center justify-center bg-slate-950">
        <p className="text-red-400">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 sm:px-6 lg:px-8">

      {/* Page Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          GitHub Profile
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
          My Open Source Journey
        </h1>

        <p className="mt-4 text-gray-400">
          Explore my GitHub profile, repositories and open-source work.
        </p>

      </div>


      {/* Main Card */}
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">

        <div className="flex flex-col md:flex-row">


          {/* ================= LEFT SIDE ================= */}
          <div className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black p-10 md:w-2/5 md:p-16">

            {/* Background decoration */}
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl"></div>

            <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl"></div>


            {/* Profile */}
            <div className="relative text-center">

              <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-1 shadow-2xl shadow-orange-500/20">

                <img
                  src={data.avatar_url}
                  alt={data.name || "GitHub Profile"}
                  className="h-52 w-52 rounded-full border-4 border-slate-950 object-cover sm:h-60 sm:w-60 md:h-64 md:w-64"
                />

              </div>

              {/* GitHub Username */}
              <p className="mt-6 text-lg font-medium text-gray-300">
                @{data.login}
              </p>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full p-8 sm:p-10 md:w-3/5 md:p-12 lg:p-16">

            {/* Name */}
            <div>

              <div className="flex flex-wrap items-center gap-3">

                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {data.name || "Mudasir Ahmad"}
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  ● Available
                </span>

              </div>

              <p className="mt-2 text-lg text-gray-500">
                @{data.login}
              </p>

              <p className="mt-6 max-w-xl leading-7 text-gray-600">
                {data.bio ||
                  "Computer Science Lecturer and Developer passionate about web development, cloud computing, DevOps and open-source projects."}
              </p>

            </div>


            {/* Location */}
            {data.location && (
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                <span>📍</span>
                <span>{data.location}</span>
              </div>
            )}


            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 rounded-2xl border border-gray-200 bg-gray-50 py-6">

              {/* Followers */}
              <div className="text-center">

                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {data.followers}
                </p>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Followers
                </p>

              </div>


              {/* Following */}
              <div className="border-x border-gray-200 text-center">

                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {data.following}
                </p>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Following
                </p>

              </div>


              {/* Repositories */}
              <div className="text-center">

                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {data.public_repos}
                </p>

                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Repositories
                </p>

              </div>

            </div>


            {/* Extra Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-xl border border-gray-200 p-4">

                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {data.login}
                </p>

              </div>


              <div className="rounded-xl border border-gray-200 p-4">

                <p className="text-sm text-gray-500">
                  Public Repositories
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  {data.public_repos}
                </p>

              </div>

            </div>


            {/* Button */}
            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-700 sm:w-auto"
            >
              <span>View GitHub Profile</span>
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Github;