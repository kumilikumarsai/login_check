"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const FailedLoginAttemptModel = connection_1.default.define("failedLogin", {
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    ip: {
        type: sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
}, {
    tableName: "failed_login_attempts_model",
    modelName: "FailedLoginAttemptModel",
});
exports.default = FailedLoginAttemptModel;
//# sourceMappingURL=failedLoginAttemps.model.js.map