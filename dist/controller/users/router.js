"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const validation_helper_1 = __importDefault(require("../../middleware/validation.helper"));
exports.default = express_1.default
    .Router()
    .post("/login", validation_helper_1.default.signin, controller_1.default.userLogin)
    .post("/register", validation_helper_1.default.signup, controller_1.default.userSignup);
//# sourceMappingURL=router.js.map