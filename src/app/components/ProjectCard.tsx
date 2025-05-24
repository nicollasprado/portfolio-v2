import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  pageUrl?: string;
  technologies: string[];
}

export default function ProjectCard({
  description,
  githubUrl,
  technologies,
  title,
  pageUrl,
}: ProjectCardProps) {
  return (
    <div className="w-[400px] h-[150px] rounded-2xl bg-project-card-bg p-3 flex gap-10">
      <section className="text-my-purple-text flex flex-col justify-between">
        <h3 className="font-medium text-xl">{title}</h3>
        <p>{description}</p>

        <ol className="flex gap-3">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="px-1 bg-project-card-tech-bg w-fit text-project-card-tech-text"
            >
              {technology}
            </li>
          ))}
        </ol>
      </section>

      <ol className="flex flex-col gap-6 justify-center">
        <li className="text-my-purple-text">
          <a href={githubUrl}>
            <Github />
          </a>
        </li>

        {pageUrl && (
          <li className="text-my-purple-text">
            <a href={pageUrl}>
              <ExternalLink />
            </a>
          </li>
        )}
      </ol>
    </div>
  );
}
