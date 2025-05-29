import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col justify-center h-full">
      <ol className="flex flex-col gap-10">
        <li>
          <ProjectCard
            title="Minervaguess"
            githubUrl="https://github.com/nicollasprado/minervaguess"
            pageUrl="https://minervaguess.vercel.app/"
            technologies={["Nextjs", "Typescript", "Postgres", "Redis"]}
            description="Site de palpites em tempo real de partidas de League of Legends."
          />
        </li>

        <li>
          <ProjectCard
            title="API E-Commerce"
            githubUrl="https://github.com/nicollasprado/ecommerce_API"
            technologies={["Java", "Springboot", "Postgres"]}
            description="Api com as principais funcionalidades de um e-commerce."
          />
        </li>
      </ol>
    </main>
  );
}
