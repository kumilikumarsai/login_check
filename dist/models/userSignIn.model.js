"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const UserSignInModel = connection_1.default.define("userSignIn", {
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(320),
        allowNull: false,
    },
    count: {
        type: sequelize_1.DataTypes.INTEGER(),
        allowNull: false,
        defaultValue: 0,
    },
}, {
    tableName: "userSignIn",
    modelName: "UserSignInModel",
    indexes: [
        {
            fields: ["email"],
            unique: true,
        },
    ],
});
UserSignInModel.sync();
exports.default = UserSignInModel;
//# sourceMappingURL=userSignIn.model.js.map