import Badge from "./Badge";
import Image from "next/image";

interface Project {
  title: string;
  badge: string;
  description: string;
  tags: string[];
  repo: string;
  url: string | null;
  appStore?: boolean;
  image?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const link = project.url || project.repo;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border p-5 transition-all hover:bg-surface"
    >
      {project.image && (
        <div className="mb-4 rounded overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={533}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-bright font-medium text-sm">{project.title}</h3>
        <Badge type={project.badge} />
        {project.appStore && (
          <span className="text-[10px] text-dim">App Store</span>
        )}
      </div>
      <p className="text-body text-xs leading-relaxed mb-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] rounded bg-surface border border-border text-dim"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-dim">
        {project.repo && (
          <span className="hover:text-accent transition-colors">
            github ↗
          </span>
        )}
        {project.url && (
          <span className="hover:text-accent transition-colors">
            live ↗
          </span>
        )}
      </div>
      <span className="block mt-2 text-accent text-xs opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
        →
      </span>
    </a>
  );
}
