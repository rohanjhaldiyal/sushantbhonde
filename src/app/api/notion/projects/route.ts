import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_PROJECTS_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export async function GET(request: NextRequest) {
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
    // @ts-ignore
    title:
      (page as PageObjectResponse).properties.title?.title[0]?.text.content ||
      "",
    // @ts-ignore
    description: (page as PageObjectResponse).properties.description
      .rich_text[0].text.content,
    // @ts-ignore
    link: (page as PageObjectResponse).properties.link.url,
    // @ts-ignore
    coverImageUrl: (page as PageObjectResponse).properties.cover_image.url,
  }));

  // return NextResponse.json({ message: "success", data: response.results });

  return NextResponse.json(filteredResponse);
}
