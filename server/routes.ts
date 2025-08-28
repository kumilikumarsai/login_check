import { Application } from "express";
import userRouter from "./controller/users/router";

export default function routes(app: Application): void {
  app.use("/api/v1/user", userRouter);
}
