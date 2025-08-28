import { Application } from "express";
export default class ExpressServer {
    constructor();
    router(routes: (app: Application) => void): ExpressServer;
    listen(port: number): Application;
}
