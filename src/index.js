import express from "express";
import "dotenv/config";
import morgan from "morgan";
import getNotionApi from "./notion";
import updateNotion from "./notion";

const app = express();
const PORT = process.env.PORT || 3000;
const logger = morgan("dev");

//view engine 세팅
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); //현재작업폴더(cwd) = node.js를 실행하는 파일(package.js)이 있는 폴더임.


app.use(logger);
app.use("/static",express.static("assets")); // /assets 아니어도 됨 url은 마음대로 설정 가능 

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    // "Origin, X-Requested-With, Content-Type, Accept"
    "Origin, X-Requested-With, Accept"
  );

  // res.header("Cross-Origin-Embedder-Policy", "credentialless");
  // res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

// url 설정 --------------------------------------------------------------------------------//

app.get("/", async (req, res) => {
  try {
    const notionData = await getNotionApi();
    console.log(notionData);
    res.render("home", { pageTitle: "Home", notionData });
    //res.sendFile(__dirname + "/views/index.html",notionData);
  } catch (err) {
    console.error(err);
  }
});
app.get("/update", async (req, res) => {
  //notion에 변경사항 업데이트
  //console.log("req:: ", req.body);

  //await updateNotion();
  //변경된 notion data 다시 보여주기
  // const notionData = await getNotionApi();
  //res.render("home", { pageTitle: "Home", notionData });
});

app.listen(PORT, () => console.log(`⭐️ Conneted server! PORT : ${PORT}`));
