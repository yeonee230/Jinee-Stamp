import { Client } from "@notionhq/client";

//기존 Postman에서 Authorization의 Bearer Token 설정한 것과 동일한 의미입니다.
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const database_id = process.env.NOTION_DATABASE_ID;

module.exports = async function getNotionApi() {
  const { results } = await notion.databases.query({
    database_id,
  });

    const notionData = results.map((page) => {
      return {
        id: page.id,
        total: page.properties.total.number,
        index: page.properties.index.number,
        name: page.properties.name.title[0].text.content,
      };
    });

    // console.log(results);
    return notionData;
  //return results;
};
