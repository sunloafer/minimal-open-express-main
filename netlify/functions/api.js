import express, { Router } from "express";
import serverless from "serverless-http";
import talkApi from "./api/talk.mjs";

const api = express();

const router = Router();
router.post("/api/talk", talkApi);

api.use("/api/", router);

export const handler = serverless(api);
