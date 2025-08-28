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
    app.use(cors({
      origin: [
        'http://localhost:3000',
        'http://localhost:3001', 
        'http://localhost:5173',
        'http://localhost:8080',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:3001',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:8080',
        'https://login-692k40oi3-jennys-projects-67f92191.vercel.app'
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }));
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
