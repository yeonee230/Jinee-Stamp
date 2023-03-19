/*
 * 파일 역할 : notion에서 데이터 가져오기 (Get data from Notion)
 */
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const database_id = process.env.NOTION_DATABASE_ID;

module.exports = async function getNotionApi() {
  // export const getNotionApi = async( ) =>{
  const { results } = await notion.databases.query({
    database_id,
  });

  const notionData = results.reverse().map((page) => {
    return {
      id: page.id,
      total: page.properties.total.formula.number,
      food: page.properties.food.number,
      book: page.properties.book.number,
      pencil: page.properties.pencil.number,
      good: page.properties.good.number,
      heart: page.properties.heart.number,
      name: page.properties.name.title[0].text.content,
    };
  });

  return notionData;
};

// module.exports = async function getNotionApi() {
//   const { results } = await notion.databases.query({
//     database_id,
//   });

//     const notionData = results.reverse().map((page) => {
//       return {
//         id: page.id,
//         total: page.properties.total.number,
//         food: page.properties.food.number,
//         book: page.properties.book.number,
//         pencil: page.properties.pencil.number,
//         good: page.properties.good.number,
//         heart: page.properties.heart.number,
//         name: page.properties.name.title[0].text.content,
//       };
//     });

//     return notionData;
// };
