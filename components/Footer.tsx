"use client";

import { useLang } from "@/lib/lang-provider";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t, dir } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      dir={dir}
      className="py-8 px-6 md:px-10 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">
        <span>
          © {year} — {t.footer.rights}
        </span>
        <span className="flex items-center gap-1.5">
          {t.footer.built}{" "}
          <Heart size={11} className="text-purple-500 fill-purple-500" />{" "}
          {t.footer.and} Next.js
        </span>
      </div>
    </footer>
  );
}
