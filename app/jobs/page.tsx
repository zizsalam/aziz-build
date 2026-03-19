import JobCard from "@/components/JobCard";
import FadeUp from "@/components/FadeUp";
import data from "@/data/jobs.json";

export default function JobsPage() {
  return (
    <div className="py-16">
      <FadeUp>
        <h2 className="section-label mb-8">// jobs</h2>
      </FadeUp>

      <div className="flex flex-col gap-px bg-border mb-16">
        {data.jobs.map((job, i) => (
          <FadeUp key={job.role + job.company} delay={i * 80}>
            <JobCard job={job} />
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <h2 className="section-label mb-6">// education</h2>
      </FadeUp>

      <div className="flex flex-col gap-px bg-border">
        {data.education.map((edu, i) => (
          <FadeUp key={edu.degree} delay={i * 80}>
            <div className="bg-bg border border-border p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-bright text-sm font-medium">
                  {edu.degree}
                </h3>
                <span className="text-accent text-xs">{edu.school}</span>
              </div>
              {edu.year && (
                <span className="text-[11px] text-dim mt-1 sm:mt-0">
                  {edu.year}
                </span>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
