import ProjectCard from "@/components/ProjectCard";
import FadeUp from "@/components/FadeUp";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <FadeUp>
        <h2 className="section-label mb-8">// projects</h2>
      </FadeUp>
      <div className="flex flex-col gap-px bg-border">
        {projects.map((project, i) => (
          <FadeUp key={project.title} delay={i * 80}>
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
