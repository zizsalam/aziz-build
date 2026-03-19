import FadeUp from "@/components/FadeUp";

const quickLinks = [
  {
    label: "github",
    href: "https://github.com/zizsalam",
    dot: true,
  },
  {
    label: "@AzizKaneaziz",
    href: "https://x.com/AzizKaneaziz",
    dot: true,
  },
  {
    label: "contributing → hlos.ai",
    href: "https://hlos.ai",
    dot: true,
    pulse: true,
  },
  {
    label: "contact ↗",
    href: "mailto:kaneaziz@gmail.com",
    dot: false,
  },
];

const statusItems = [
  { label: "Status", value: "active", dot: true },
  { label: "Focus", value: "Agentic Commerce / AI Infra" },
  {
    label: "Lab",
    value: "Efficient Frontier Labs",
    href: "https://efficientfrontierlabs.com",
  },
  { label: "Location", value: "San Francisco, CA" },
];

export default function Home() {
  return (
    <div className="py-20 sm:py-32">
      <FadeUp>
        <div className="mb-8">
          <span className="text-dim text-sm font-mono">
            ~/building-at-the-break
          </span>
          <span className="cursor-blink text-accent">█</span>
        </div>
      </FadeUp>

      <FadeUp delay={100}>
        <h1 className="text-5xl sm:text-[68px] leading-tight mb-6" style={{ fontFamily: "var(--font-serif), serif" }}>
          <span className="text-bright">Aziz </span>
          <span className="text-accent italic">Kane</span>
        </h1>
      </FadeUp>

      <FadeUp delay={200}>
        <p className="text-body max-w-lg mb-2 text-sm">
          Builder. Fintech founder. Active contributor to{" "}
          <a
            href="https://efficientfrontierlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent3 hover:underline"
          >
            Efficient Frontier Labs
          </a>
          .
        </p>
        <p className="text-dim max-w-lg mb-10 text-sm">
          Pushing the frontier on agentic systems, AI infrastructure, and
          financial tooling for emerging markets.
        </p>
      </FadeUp>

      <FadeUp delay={300}>
        <div className="flex flex-wrap gap-2 mb-12">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs text-dim hover:text-bright hover:border-accent/40 transition-all"
            >
              {link.dot && (
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-accent ${
                    link.pulse ? "pulse-dot" : ""
                  }`}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={400}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded overflow-hidden">
          {statusItems.map((item) => (
            <div key={item.label} className="bg-surface p-4">
              <div className="section-label mb-1">{item.label}</div>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent3 text-xs hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <div className="text-bright text-xs flex items-center gap-1.5">
                  {item.dot && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
                  )}
                  {item.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
