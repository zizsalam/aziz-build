import Badge from "./Badge";
import Link from "next/link";

interface Writing {
  title: string;
  source: string;
  url: string | null;
  date: string;
  featured: boolean;
  tags: string[];
}

export default function WritingItem({ item }: { item: Writing }) {
  const isExternal = item.url?.startsWith("http");
  const className = `group flex flex-col sm:flex-row sm:items-center justify-between py-3 px-2 border-b border-border transition-all ${
    item.url ? "hover:pl-4 cursor-pointer" : "opacity-70"
  }`;

  const content = (
    <>
      <div className="flex-1">
        <span
          className={`text-sm text-bright transition-colors ${
            item.url ? "group-hover:text-accent" : ""
          }`}
        >
          {item.title}
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] text-dim uppercase tracking-wider">
            {item.source}
          </span>
          {item.featured && <Badge type="featured" />}
          {item.tags.map((tag) => (
            <span key={tag} className="text-[10px] text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className="text-[11px] text-dim mt-1 sm:mt-0">{item.date}</span>
    </>
  );

  if (!item.url) {
    return <div className={className}>{content}</div>;
  }

  if (isExternal) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.url} className={className}>
      {content}
    </Link>
  );
}
