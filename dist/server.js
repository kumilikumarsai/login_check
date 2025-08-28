"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const os_1 = __importDefault(require("os"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
class ExpressServer {
    constructor() {
        app.use(body_parser_1.default.json());
        app.use((0, cors_1.default)());
    }
    router(routes) {
        routes(app);
        return this;
    }
    listen(port) {
        const welcome = (p) => () => console.log(`up and running in ${config_1.default.NODE_ENV || "development"} @: ${os_1.default.hostname()} on port: ${p}}`);
        http_1.default.createServer(app).listen(port, welcome(port));
        return app;
    }
}
exports.default = ExpressServer;
//# sourceMappingURL=server.js.map