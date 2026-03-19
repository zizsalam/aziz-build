const badgeStyles: Record<string, string> = {
  active: "bg-accent/10 text-accent border-accent/20",
  live: "bg-accent2/10 text-accent2 border-accent2/20",
  research: "bg-accent3/10 text-accent3 border-accent3/20",
  wip: "bg-muted/10 text-muted border-muted/20",
  featured: "bg-accent3/10 text-accent3 border-accent3/20",
};

export default function Badge({ type }: { type: string }) {
  const style = badgeStyles[type] || badgeStyles.wip;
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] uppercase tracking-wider border ${style}`}
    >
      {type}
    </span>
  );
}
