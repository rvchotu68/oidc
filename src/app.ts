import express from "express";
import type { Application } from "express";

//user imports

import authRouter from "./modules/auth/auth.routes.js";

const app: Application = express();

app.use(express.json());

app.use("/auth", authRouter);

export default app;
