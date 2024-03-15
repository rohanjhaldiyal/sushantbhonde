import { FaComputer } from "react-icons/fa6";
import ProjectsCard from "./ProjectsCard";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_PROJECTS_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

async function fetchProjects() {
  if (!notionSecret || !notionDatabaseId) {
    throw new Error("Notion secret or database id not provided");
  }

  const response = await notion.databases.query({
    database_id: notionDatabaseId,
    sorts: [
      {
        property: "index",
        direction: "ascending",
      },
    ],
  });

  type Project = {
    title: string;
    description: string;
    link: string;
    coverImageUrl: string;
  };
  const filteredResponse: Project[] = response.results.map((page) => ({
    title:
      (page as PageObjectResponse).properties.title?.title[0]?.text.content ||
      "",
    description: (page as PageObjectResponse).properties.description
      .rich_text[0].text.content,
    link: (page as PageObjectResponse).properties.link.url,
    coverImageUrl: (page as PageObjectResponse).properties.cover_image.files[0]
      ?.file.url,
  }));

  return filteredResponse;
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
