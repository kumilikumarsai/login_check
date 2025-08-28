"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../server/models/user.model"));
const response_1 = require("../constants/response");
const userSignIn_model_1 = __importDefault(require("../models/userSignIn.model"));
class UserHelper {
    async getUserInfoByEmail(email) {
        try {
            return await user_model_1.default.findOne({
                where: {
                    email: email,
                },
                raw: true,
            });
        }
        catch (err) {
            return {
                error: true,
                message: err.message,
                status: response_1.RESPONSES.BADREQUEST,
            };
        }
    }
    async addWrongPasswordCounter(email) {
        try {
            const getUserSignInDetails = await userSignIn_model_1.default.findOne({
                where: { email: email },
            });
            console.log("000000");
            if (!getUserSignInDetails) {
                const addCount = await userSignIn_model_1.default.create({
                    email: email,
                    count: 1,
                });
            }
            else {
                if (getUserSignInDetails.count != 4) {
                    const updateCount = await userSignIn_model_1.default.update({ count: (getUserSignInDetails === null || getUserSignInDetails === void 0 ? void 0 : getUserSignInDetails.count) + 1 }, { where: { email: email } });
                }
                else {
                    const blockUser = await this.blockUser(email, true);
                }
            }
            return {
                error: false,
            };
        }
        catch (err) {
            return {
                error: true,
                message: err.message,
                status: response_1.RESPONSES.BADREQUEST,
            };
        }
    }
    async blockUser(email, blockStatus) {
        try {
            console.log(new Date().toISOString(), "000000------");
            const removeRecord = await userSignIn_model_1.default.destroy({
                where: { email: email },
            });
            const blockUser = await user_model_1.default.update({ blocked: blockStatus, blockedTime: new Date() }, { where: { email: email } });
            return {
                error: false,
            };
        }
        catch (err) {
            return {
                error: true,
                message: "Error while blocking the user",
            };
        }
    }
}
exports.default = new UserHelper();
//# sourceMappingURL=user.helper.js.map