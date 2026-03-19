"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home", key: "h" },
  { href: "/projects", label: "projects", key: "p" },
  { href: "/writing", label: "writing", key: "w" },
  { href: "/jobs", label: "jobs", key: "j" },
  { href: "/videos", label: "videos", key: "v" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center px-7 backdrop-blur-md bg-bg/80 border-b border-border">
      <Link href="/" className="text-bright font-semibold mr-8 text-sm">
        ~/aziz
      </Link>
      <div className="flex gap-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs transition-colors ${
                isActive
                  ? "text-accent"
                  : "text-dim hover:text-body"
              }`}
            >
              <kbd className="text-[10px] px-1 py-0.5 rounded border border-border bg-surface text-muted font-mono">
                {link.key}
              </kbd>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
