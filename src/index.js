import express from "express";
import "dotenv/config";
import morgan from "morgan";
import getNotionApi from './notion';

const app = express();
const PORT = process.env.PORT || 3000;
const logger = morgan("dev");

//view engine 세팅 
app.set("view engine", "pug"); 
app.set("views", process.cwd() + "/src/views"); //현재작업폴더(cwd) = node.js를 실행하는 파일(package.js)이 있는 폴더임.


//app.use(express.static(__dirname + "/public"));

app.use(logger);

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
        console.log(notionData);
        //console.log(notionData[0].name)
        res.render("home" , {pageTitle : "Home", notionData});
        //res.sendFile(__dirname + "/views/index.html",notionData);
      } catch (err) {
        console.error(err);
      }

  
});

app.listen(PORT, () => console.log(`⭐️ Conneted server! PORT : ${PORT}`));
