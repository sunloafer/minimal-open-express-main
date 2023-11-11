import 'dotenv/config' 
import express from "express";
import talkApi from "./api/talk.mjs";

const app = express();
const port = 3000;

app.use(express.json());

app.post('/talk', talkApi)

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
