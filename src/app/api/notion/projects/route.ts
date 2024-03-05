import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_PROJECTS_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export async function GET() {
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
    title: page.properties.title.title[0].text.content,
    description: page.properties.description.rich_text[0].text.content,
    link: page.properties.link.url,
    coverImageUrl: page.properties.cover_image.files[0]?.file.url,
  }));

  // return NextResponse.json({ message: "success", data: response.results });

  return NextResponse.json(filteredResponse);
}
