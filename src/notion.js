import { Client } from "@notionhq/client";

//기존 Postman에서 Authorization의 Bearer Token 설정한 것과 동일한 의미입니다.
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
        total: page.properties.total.number,
        food: page.properties.food.number,
        book: page.properties.book.number,
        pencil: page.properties.pencil.number,
        good: page.properties.good.number,
        heart: page.properties.heart.number,
        name: page.properties.name.title[0].text.content,
      };
    });
  
    return notionData;
  
  }
  

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

// module.exports = async function updateNotion() {
//   // const { results } = await notion.databases.query({
//   //   database_id,
//   // });
//   const pageId = {YOUR_PAGE_ID};
//   await notion.databases.update({
//     id: databases.id,
//     properties: {
//       Ready: {
//         food: 2,
//       },
//     },
//   })
   
// };



// export const updateNotionData = async (res,req) =>{

// }


// export const getNotionApi = async() =>{
//   const { results } = await notion.databases.query({
//     database_id,
//   });

//   const notionData = results.reverse().map((page) => {
//     return {
//       id: page.id,
//       total: page.properties.total.number,
//       food: page.properties.food.number,
//       book: page.properties.book.number,
//       pencil: page.properties.pencil.number,
//       good: page.properties.good.number,
//       heart: page.properties.heart.number,
//       name: page.properties.name.title[0].text.content,
//     };
//   });

//   return notionData;

// }
