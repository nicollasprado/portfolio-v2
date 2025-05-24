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
    <div className="xl:w-[600px] xl:h-[150px] w-[350px] h-[230px] mx-3 xl:m-0 rounded-2xl bg-project-card-bg p-3 py-5 flex xl:flex-row flex-col xl:gap-2 gap-8 xl:justify-between shadow-2xl">
      <section className="text-my-purple-text flex flex-col justify-between xl:gap-0 gap-2">
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

      <ol className="flex xl:flex-col xl:gap-6 xl:justify-center justify-around gap-4">
        <li>
          <a
            href={githubUrl}
            target="_blank"
            title="Link do código"
            className="text-black xl:text-my-purple-text xl:bg-transparent bg-foreground rounded-md w-full xl:p-0 px-15 py-2 flex justify-center"
          >
            <Github />
          </a>
        </li>

        {pageUrl && (
          <li>
            <a
              href={pageUrl}
              target="_blank"
              title="Link do site"
              className="text-black xl:text-my-purple-text xl:bg-transparent bg-foreground rounded-md w-full xl:p-0 px-15 py-2 flex justify-center"
            >
              <ExternalLink />
            </a>
          </li>
        )}
      </ol>
    </div>
  );
}
