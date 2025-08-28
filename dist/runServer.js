"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = __importDefault(require("./config"));
const port = config_1.default.RUNNING_PORT;
const server = new server_1.default();
const app = server.router(routes_1.default).listen(port);
// Export for Vercel serverless
exports.default = app;
//# sourceMappingURL=runServer.js.map