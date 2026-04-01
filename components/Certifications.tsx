"use client";
 
import Section, { SectionLabel } from "@/components/Section";
import { useLang } from "@/lib/lang-provider";
import { Award } from "lucide-react";
 
const CERTS = [
  {
    name: "Artificial Intelligence Fundamentals with Capstone Project",
    issuer: "IBM",
    date: "2024",
  },
  {
    name: "Introduction to Data Science in Python",
    issuer: "University of Michigan",
    date: "2024",
  },
  {
    name: "Data Collection and Processing with Python",
    issuer: "University of Michigan",
    date: "2024",
  },
  {
    name: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM",
    date: "2024",
  },
  {
    name: "AI Prerequisite Python Training Program (5 Courses)",
    issuer: "KAUST Academy",
    date: "2024",
  },
];
 
export default function Certifications() {
  const { t, dir } = useLang();
 
  return (
    <Section id="certifications">
      <div dir={dir}>
        <SectionLabel>{t.certifications.sectionLabel}</SectionLabel>
        <h2
          className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50 font-normal mt-2 mb-12"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {t.certifications.heading}
        </h2>
 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => (
            <div
              key={i}
              className="group p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-zinc-900/50 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 mb-4 rounded-lg bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-900/40 transition-colors">
                <Award size={18} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-medium text-sm text-zinc-900 dark:text-zinc-100 leading-snug mb-1">
                {cert.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">{cert.issuer}</p>
              <p className="font-mono text-xs text-purple-500 dark:text-purple-400">
                {t.certifications.issued} {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}