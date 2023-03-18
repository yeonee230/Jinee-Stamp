import { Client } from "@notionhq/client";

//기존 Postman에서 Authorization의 Bearer Token 설정한 것과 동일한 의미입니다.
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const database_id = process.env.NOTION_DATABASE_ID;

module.exports = async function getNotionApi() {
  const pageId = { YOUR_PAGE_ID };
  await notion.pages.update({
    page_id: id,
    properties: {
        food: 2, 
    },
  });
};
