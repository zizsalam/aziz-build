import Badge from "./Badge";

interface Job {
  role: string;
  company: string;
  url: string | null;
  period: string;
  badge: string | null;
  description: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="border border-border p-5 transition-all hover:bg-surface">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-bright font-medium text-sm">{job.role}</h3>
          {job.url ? (
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent text-xs hover:underline"
            >
              {job.company}
            </a>
          ) : (
            <span className="text-accent text-xs">{job.company}</span>
          )}
          <p className="text-body text-xs leading-relaxed mt-2">
            {job.description}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[11px] text-dim whitespace-nowrap">
            {job.period}
          </span>
          {job.badge && <Badge type={job.badge} />}
        </div>
      </div>
    </div>
  );
}
