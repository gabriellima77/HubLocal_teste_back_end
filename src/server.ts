import cors from "cors";
import express from "express";

import { dataSource } from "./database";
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

  app.use("/api", router);

  app.listen(3333, () => console.log("Server is running in port: 3333"));
};

dataSource
  .initialize()
  .then(() => startServer())
  .catch((error) => console.log(error));
