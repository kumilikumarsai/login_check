"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const UserModel = connection_1.default.define("users", {
    userId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(320),
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: false,
    },
    whitelistedIps: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
        defaultValue: [],
    },
}, {
    tableName: "users",
    modelName: "UserModel",
    indexes: [
        {
            fields: ["email"],
            unique: true,
        },
    ],
});
UserModel.sync();
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map