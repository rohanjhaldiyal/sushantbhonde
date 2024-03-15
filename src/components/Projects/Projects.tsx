import { FaComputer } from "react-icons/fa6";
import ProjectsCard from "./ProjectsCard";

async function fetchProjects() {
  const API_URL = process.env.API_URL;
  const res = await fetch(`${API_URL}/api/notion/projects`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Projects(): Promise<any> {
  const projects = await fetchProjects();
  return (
    <>
      <div className="bg-base-100">
        <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mt-8">
          <FaComputer className="inline-block pb-2 mx-2 text-4xl" />
          Project Showcase :-
        </h1>
      </div>
      {projects.map(
        (
          project: {
            coverImageUrl: string;
            description: string;
            link: string;
            title: string;
          },
          index: number
        ) => (
          <ProjectsCard
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
            imageUrl={project.coverImageUrl}
            isEven={index % 2 === 0}
          />
        )
      )}
    </>
  );
}
