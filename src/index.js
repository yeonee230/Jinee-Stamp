import express from "express";
import "dotenv/config";

import getNotionApi from './notion';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.header("Cross-Origin-Embedder-Policy", "credentialless");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.get("/", async (req, res) => {
    try {
        const notionData = await getNotionApi();
        res.send(notionData);
      } catch (err) {
        console.error(err);
      }
  //res.sendFile(__dirname + "/views/index.html");
});

app.listen(PORT, () => console.log(`⭐️ Conneted server! PORT : ${PORT}`));
