/*
파일 역할 : notion에 데이터 업데이트 (Update data to Notion)
 */
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

module.exports = async function getNotionApi(id, name, point) {
  const page_id = id;
  console.log("name and point!! ", name, point);

  if (name === "food") {
    await notion.pages.update({
      page_id,
      properties: {
        food: point,
      },
    });
  } else if (name === "book") {
    await notion.pages.update({
      page_id,
      properties: {
        book: point,
      },
    });
  } else if (name === "pencil") {
    await notion.pages.update({
      page_id,
      properties: {
        pencil: point,
      },
    });
  } else if (name === "good") {
    await notion.pages.update({
      page_id,
      properties: {
        good: point,
      },
    });
  } else if (name === "heart") {
    await notion.pages.update({
      page_id,
      properties: {
        heart: point,
      },
    });
  }
};
