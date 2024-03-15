import { FaComputer } from "react-icons/fa6";
import ProjectsCard from "@/components/Projects/ProjectsCard";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_SIDE_PROJECTS_DATABASE_ID;

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

export default async function SideProjects(): Promise<any> {
  const projects = await fetchProjects();
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/sideprojects.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              SIDE PROJECTS
            </h1>
            <h3 className="text-xl font-semibold text-center">
              SYSTEM DESIGN, TECHNICAL DESIGN
              <p className="text-center m-0 p-12">UNREAL ENGINE</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-base-100">
        <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mt-8">
          <FaComputer className="inline-block pb-2 mx-2 text-4xl" />
          Side Projects :-
        </h1>
      </div>
      {projects.map(
        (
          project: {
            title: string;
            link: string;
            description: string;
            coverImageUrl: string;
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
