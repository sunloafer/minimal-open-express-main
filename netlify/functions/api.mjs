import express, { Router } from "express";
import serverless from "serverless-http";
import talkApi from "../talk.mjs";

const api = express();

const router = Router();
router.post('/talk', talkApi);

api.use("/api/", router);

export const handler = serverless(api);
