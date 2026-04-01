"use client";

import { useLang } from "@/lib/lang-provider";
import { ArrowDown, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { t, dir } = useLang();

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      dir={dir}
      className="relative min-h-screen flex items-center px-6 md:px-10 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-violet-500/10 dark:bg-violet-500/6 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6b7280 1px, transparent 1px), linear-gradient(to bottom, #6b7280 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full pt-24">
        <div
          className={cn(
            "opacity-0 animate-fade-up",
            "font-mono text-xs tracking-widest uppercase text-purple-500 dark:text-purple-400 mb-4"
          )}
        >
          {t.hero.greeting}
        </div>

        <h1
          className="opacity-0 animate-fade-up delay-100 font-serif text-6xl md:text-8xl lg:text-9xl font-normal leading-none text-zinc-900 dark:text-zinc-50 mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {t.hero.name}
        </h1>

        <h2
          className="opacity-0 animate-fade-up delay-200 text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light mb-6 max-w-xl"
        >
          {t.hero.title}
        </h2>

        <p
          className="opacity-0 animate-fade-up delay-300 text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed mb-10"
        >
          {t.hero.subtitle}
        </p>

        <div
          className={cn(
            "opacity-0 animate-fade-up delay-400 flex gap-4 flex-wrap",
            dir === "rtl" ? "flex-row-reverse" : ""
          )}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 active:scale-95 text-white rounded-lg font-mono text-sm transition-all duration-200 shadow-lg shadow-purple-900/20"
          >
            {t.hero.cta}
            <ArrowDown
              size={14}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </button>

          <a
            href="/cv.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-500 active:scale-95 text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg font-mono text-sm transition-all duration-200"
          >
            <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
            {t.hero.cv}
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="opacity-0 animate-fade-up delay-500 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 active:scale-95 transition-all"
        >
          <span className="font-mono text-xs tracking-widest">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
