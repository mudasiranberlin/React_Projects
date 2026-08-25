import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    name: "React Projects",
    description:
      "A collection of React projects, components, hooks and exercises built while learning and teaching modern React.",
    category: "Web Development",
    language: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/React_Projects",
  },
  {
    name: "Video Backend",
    description:
      "A Node.js and MongoDB backend for a video platform with authentication, Cloudinary uploads and REST APIs.",
    category: "Web Development",
    language: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/video-backend",
  },
  {
    name: "Library Signup",
    description:
      "A library management project focused on user signup and membership functionality.",
    category: "Web Development",
    language: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/Library-Signup",
  },
  {
    name: "Subscriptions Tracker",
    description:
      "An application for tracking recurring subscriptions, renewal dates, costs and subscription status.",
    category: "Web Development",
    language: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    github:
      "https://github.com/mudasiranberlin/Subscriptions-Tracker",
  },
  {
    name: "Backend Posts",
    description:
      "A REST API project demonstrating CRUD operations for creating, reading, updating and deleting posts.",
    category: "Web Development",
    language: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/backend-posts",
  },
  {
    name: "Ansible Project",
    description:
      "Configuration-management playbooks for automating server setup and application deployment.",
    category: "Cloud & DevOps",
    language: "Ansible",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/ansible-project",
  },
  {
    name: "Kubernetes",
    description:
      "Kubernetes manifests covering Pods, Deployments, Services, ReplicaSets, scaling and cluster resources.",
    category: "Cloud & DevOps",
    language: "YAML",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/Kubernetes",
  },
  {
    name: "Helm",
    description:
      "Helm charts and Kubernetes templates for packaging and deploying applications.",
    category: "Cloud & DevOps",
    language: "YAML",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/Helm",
  },
  {
    name: "Docker",
    description:
      "Dockerfiles and containerization examples for building and running applications in containers.",
    category: "Cloud & DevOps",
    language: "Docker",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/Docker",
  },
  {
    name: "AWS Projects",
    description:
      "Cloud projects using AWS services and infrastructure for hosting, deployment and cloud experimentation.",
    category: "Cloud & DevOps",
    language: "AWS",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/AWS-Projects",
  },
  {
    name: "Terraform",
    description:
      "Infrastructure-as-code projects for provisioning and managing cloud infrastructure using Terraform.",
    category: "Cloud & DevOps",
    language: "HCL",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/Terraform",
  },
  {
    name: "Amplify",
    description:
      "A TypeScript project exploring AWS Amplify and full-stack cloud application deployment.",
    category: "Cloud & DevOps",
    language: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/Amplify",
  },
  {
    name: "Nagios",
    description:
      "Infrastructure monitoring project using Nagios for service monitoring and alerting.",
    category: "Cloud & DevOps",
    language: "Config",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/Nagios",
  },
  {
    name: "Chef Project",
    description:
      "Configuration-management project using Chef for automated server provisioning.",
    category: "Cloud & DevOps",
    language: "Ruby",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/mudasiranberlin/chef-project",
  },
  {
    name: "Malaria Detection",
    description:
      "An image-processing project focused on detecting malaria parasites from blood-smear images.",
    category: "AI & Data",
    language: "MATLAB",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
    github:
      "https://github.com/mudasiranberlin/Malaria-Detection-Project",
  },
  {
    name: "React Fiber Architecture",
    description:
      "Learning and reference material explaining React Fiber and how React works internally.",
    category: "AI & Data",
    language: "Markdown",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    github:
      "https://github.com/mudasiranberlin/react-fiber-architecture",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:bg-white/10">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white">
            {project.name}
          </h3>

          <span className="rounded-lg bg-orange-500/10 px-2 py-1 text-xs text-orange-400">
            {project.language}
          </span>
        </div>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            View GitHub →
          </a>

          <Link
            to="/contact"
            className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Cloud & DevOps",
    "AI & Data",
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return PROJECTS;
    }

    return PROJECTS.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">
        
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
          alt="Technology workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8">

          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 backdrop-blur-md">
              🚀 My Work
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              My
              <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              Explore the projects I have built while working with
              React, Node.js, AWS, Docker, Kubernetes, DevOps and
              other modern technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <div className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                <span className="text-2xl font-bold text-orange-400">
                  {PROJECTS.length}
                </span>
                <span className="ml-2 text-sm text-gray-300">
                  Projects
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                <span className="text-2xl font-bold text-blue-400">
                  3+
                </span>
                <span className="ml-2 text-sm text-gray-300">
                  Areas
                </span>
              </div>

              <a
                href="https://github.com/mudasiranberlin"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-gray-200"
              >
                GitHub Profile ↗
              </a>

            </div>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>


      {/* ================= PROJECT SECTION ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things I Have Built
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            From web applications to cloud infrastructure and
            DevOps projects, here are some of the things I have
            worked on.
          </p>

        </div>


        {/* ================= FILTER ================= */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/20"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 px-8 py-16 text-center shadow-2xl sm:px-16">

          <div className="text-5xl">
            💻
          </div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Want to see more?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-orange-50">
            Visit my GitHub profile to explore all of my repositories,
            experiments and learning projects.
          </p>

          <a
            href="https://github.com/mudasiranberlin"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-600 transition hover:scale-105"
          >
            Visit GitHub →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Project;