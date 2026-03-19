"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const keyMap: Record<string, string> = {
  h: "/",
  p: "/projects",
  w: "/writing",
  j: "/jobs",
  v: "/videos",
};

export default function KeyboardNav() {
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }
      const path = keyMap[e.key];
      if (path) {
        router.push(path);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface/80 backdrop-blur border border-border text-[10px] text-muted">
      <kbd className="px-1 border border-border rounded">h</kbd>
      <kbd className="px-1 border border-border rounded">p</kbd>
      <kbd className="px-1 border border-border rounded">w</kbd>
      <kbd className="px-1 border border-border rounded">j</kbd>
      <kbd className="px-1 border border-border rounded">v</kbd>
      <span className="ml-1">— navigate</span>
    </div>
  );
}
