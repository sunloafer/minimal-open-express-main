import 'dotenv/config' 
import express from "express";

import talkApi from "./netlify/talk.mjs";
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/talk', talkApi)

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
