import express from "express";
import type { Application, Request, Response, NextFunction } from "express";

//user imports
import authRouter from "./modules/auth/auth.routes.js";
import APIError from "./common/utils/api-error.js";

const app: Application = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof APIError) {
    if (!err.isOperational) console.log("non operational error");

    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
  }
});

export default app;
