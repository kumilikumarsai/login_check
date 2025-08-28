"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    MYSQLDB: {
        DATABASE_NAME: process.env.DATABASE_NAME || "loginRadius",
        USERNAME: process.env.DB_USERNAME || "root",
        PASSWORD: process.env.DB_PASSWORD || "password",
        HOST: process.env.DB_HOST || "localhost",
    },
    RUNNING_PORT: parseInt(process.env.PORT || "3003"),
    NODE_ENV: process.env.NODE_ENV || "development",
    WHITELISTED_DOMAINS: [process.env.LOCAL_DOMAIN],
    JWT: {
        ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        REFRESH_TOKEN: process.env.JWT_REFRESH_SECRET,
        ISSUER: process.env.JWT_ISSUER,
        EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    },
};
//# sourceMappingURL=index.js.map