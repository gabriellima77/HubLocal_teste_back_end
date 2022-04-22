import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { dataSource } from "./database";
import { AppError } from "./errors/AppError";
import { router } from "./routes";
import "./shared/container";

const startServer = () => {
  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

  app.use(express.json());

  app.use(router);

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      if (error instanceof AppError) {
        return response
          .status(error.statusCode)
          .json({ message: error.message });
      }
      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${error.message}`,
      });
    }
  );

  app.listen(3333, () => console.log("Server is running in port: 3333"));
};

dataSource
  .initialize()
  .then(() => startServer())
  .catch((error) => console.log(error));
