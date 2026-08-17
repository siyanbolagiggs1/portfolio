import Image from "next/image";

const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Go"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "Angular (fundamentals)"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Go (Gin)", "REST API design", "Microservices", "JSON Schema validation (Ajv, Joi, Zod)"],
  },
  {
    group: "Data & Infra",
    items: ["MongoDB", "Mongoose", "Redis", "Docker", "GitHub Actions CI/CD", "Google Cloud Storage"],
  },
  {
    group: "Real-time & Payments",
    items: ["Socket.io", "Server-Sent Events (SSE)", "Stripe (Payment Intents + Connect)", "JWT / OAuth"],
  },
  {
    group: "Automation & Integrations",
    items: ["n8n", "HubSpot CRM", "GoHighLevel", "Webhook integrations"],
  },
  {
    group: "Engineering Practices",
    items: ["Git & collaborative code review", "Automated testing", "Production troubleshooting"],
  },
];

const projects = [
  {
    name: "Pulse",
    role: "Solo Full-Stack Developer",
    period: "2026-Present",
    description:
      "A social engagement marketplace where businesses fund repost campaigns and everyday promoters earn money reposting on Instagram and Twitter/X. Built end-to-end: influence scoring, fraud detection, Stripe Connect payouts, real-time notifications over SSE, and n8n automation workflows syncing new signups into HubSpot CRM plus scheduled uptime monitoring with email alerting. Deployed with Docker and CI/CD to Fly.io and Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "Gin", "MongoDB", "Redis", "Stripe", "Docker", "n8n", "HubSpot"],
    link: "https://pulse-murex-five.vercel.app/",
    linkLabel: "Live app",
  },
  {
    name: "JustTalk",
    role: "Full-Stack Developer",
    description:
      "Full-stack developer on a social messaging and voice-casts app. Contributed across seven Node.js/Express/TypeScript microservices (auth, identity, casts, messaging, search, subscriptions, shared data models) and the React Native mobile client — real-time chat over Socket.io, JWT + Google OAuth, referral system and email verification flows, activity tracking, and media pipelines with ffmpeg and Google Cloud Storage.",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Socket.io", "React Native", "Google Cloud Storage"],
    link: "https://justtalkapp.com/",
    linkLabel: "App site (App Store & Google Play)",
  },
  {
    name: "expendit",
    role: "Open-Source Contributor",
    description:
      "Open-source expense-tracking app. Shipped Google Sign-In, schema-based input/password validation, a JWT duplicate-token fix, expense CRUD fixes, Docker/CORS configuration fixes, replaced hardcoded URLs and SMTP settings with configurable environment variables, and an AI-powered financial document processing and transaction-insights feature.",
    stack: ["Next.js", "TypeScript", "Go"],
    link: "https://expendit.cuesoft.io/",
    linkLabel: "Live demo",
  },
];

const certifications = [
  {
    name: "Claude 101",
    issuer: "Anthropic",
    image: "/certs/claude-101.jpg",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    image: "/certs/ai-fluency.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-24 px-6 py-20 sm:px-10">
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Full-Stack Developer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Khalid Siyanbola
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I build reliable full-stack products end to end — marketplaces,
            real-time social apps, and fintech tools — across Go, Node.js,
            React, and React Native.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium">
            <a
              href="mailto:siyanbolagiggs@gmail.com"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              siyanbolagiggs@gmail.com
            </a>
            <a
              href="https://github.com/siyanbolagiggs1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-300 px-5 py-2.5 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group} className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col gap-3 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {project.role} · {project.period}
                  </span>
                </div>
                <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-1 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  {project.linkLabel} ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Certifications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((cert) => (
              <figure
                key={cert.name}
                className="flex flex-col gap-3 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
              >
                <Image
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  width={800}
                  height={618}
                  className="h-auto w-full rounded-lg"
                />
                <figcaption className="text-sm">
                  <span className="font-medium">{cert.name}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">
                    {" "}
                    — {cert.issuer}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} Khalid Siyanbola.
        </footer>
      </main>
    </div>
  );
}
