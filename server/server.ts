import express, { Application } from "express";
import bodyParser from "body-parser";
import http from "http";
import os from "os";
import cors from "cors";
import CONFIG from "./config";
const app = express();

export default class ExpressServer {
  constructor() {
    app.use(bodyParser.json());
    app.use(cors());
  }

  router(routes: (app: Application) => void): ExpressServer {
    routes(app);
    return this;
  }

  listen(port: number): Application {
    const welcome = (p: number) => (): void =>
      console.log(
        `up and running in ${
          CONFIG.NODE_ENV || "development"
        } @: ${os.hostname()} on port: ${p}}`
      );

    http.createServer(app).listen(port, welcome(port));

    return app;
  }
}
