"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Import modules
require("./config");
require("./db/connection");
require("./runServer");
// For Vercel serverless deployment
const app = require('./runServer').default;
// Export for Vercel
exports.default = app;
//# sourceMappingURL=index.js.map