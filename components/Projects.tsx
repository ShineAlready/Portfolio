"use client";

import Section, { SectionLabel } from "@/components/Section";
import { useLang } from "@/lib/lang-provider";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "SafeTrack Kids",
    description:
      "Graduation project: a smart wearable event safety solution enabling real-time child monitoring and safe-zone alerts through integrated location and wireless communication technologies. Supports event organizers through data-driven monitoring and a rental-based service model.",
    tech: ["IoT", "Python", "Machine Learning", "Real-time Monitoring", "Data Analysis"],
    url: "#",
    repo: "#",
  },
  {
    title: "Gmail Automation System",
    description:
      "Rule-based email automation system that classifies incoming Gmail messages and converts unstructured email events into structured datasets stored in Google Sheets for tracking and analysis. Implements API integrations, OAuth2 authentication, conditional logic routing, and production deployment.",
    tech: ["n8n", "Google APIs", "OAuth2", "JavaScript", "Google Sheets"],
    url: "#",
    repo: "#",
  },
];

export default function Projects() {
  const { t, dir } = useLang();

  return (
    <Section id="projects">
      <div dir={dir}>
        <SectionLabel>{t.projects.sectionLabel}</SectionLabel>
        <h2
          className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 font-normal mt-2 mb-12"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {t.projects.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="group relative p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-emerald-300 dark:hover:border-emerald-700 bg-white dark:bg-zinc-900/50 hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-300"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:via-emerald-500/3 group-hover:to-emerald-500/0 transition-all duration-500 pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-serif text-xl text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  {project.title}
                </h3>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 active:scale-95 transition-all"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
