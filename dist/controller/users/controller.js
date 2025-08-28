"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const response_1 = require("../../constants/response");
const messages_1 = require("../../constants/messages");
const user_helper_1 = __importDefault(require("../../helpers/user.helper"));
const user_model_1 = __importDefault(require("../../models/user.model"));
class Controller {
    constructor() {
        this.userLogin = async (req, res) => {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return res.status(response_1.RESPONSES.BADREQUEST).send({
                        message: messages_1.MESSAGES.USER.LOGIN.INVALID,
                        error: true,
                    });
                }
                const userInfo = await user_helper_1.default.getUserInfoByEmail(email);
                if (!userInfo) {
                    return res.status(response_1.RESPONSES.BADREQUEST).send({
                        message: messages_1.MESSAGES.USER.LOGIN.MAIL_NOT_FOUND,
                        error: true,
                    });
                }
                // Simple password check (you should implement proper password hashing)
                if (userInfo.password === password) {
                    return res.status(response_1.RESPONSES.SUCCESS).send({
                        userId: userInfo.id,
                        email: userInfo.email,
                        message: messages_1.MESSAGES.USER.LOGIN.SUCCESS,
                        error: false,
                    });
                }
                else {
                    // Add wrong password counter
                    await user_helper_1.default.addWrongPasswordCounter(email);
                    return res.status(response_1.RESPONSES.BADREQUEST).send({
                        message: messages_1.MESSAGES.USER.LOGIN.WRONG_PASSWORD,
                        error: true,
                    });
                }
            }
            catch (error) {
                console.log("user login error:: ", error);
                return res.status(response_1.RESPONSES.BADREQUEST).send({
                    message: error.message,
                    error: true,
                });
            }
        };
        this.userSignup = async (req, res) => {
            try {
                const reqBody = req.body;
                const user = {
                    email: reqBody.email,
                    password: reqBody.password,
                };
                // const Verify: any = await UserModel.findOne({
                //   where: { email },
                // });
                // if (Verify && Verify.verified == 1) {
                //   return res.status(RESPONSES.BADREQUEST).send({
                //     message: MESSAGES.USER.REGISTER.ALREADY_REGISTERED,
                //     error: true,
                //   });
                // }
                const createUser = await user_model_1.default.create(user);
                if (createUser) {
                    res.status(response_1.RESPONSES.SUCCESS);
                    return {
                        message: messages_1.MESSAGES.USER.REGISTER.SUCCESS,
                        error: false,
                    };
                }
                res.status(response_1.RESPONSES.BADREQUEST);
                return {
                    error: true,
                    message: messages_1.MESSAGES.USER.REGISTER.REGISTRATION_FAILED,
                };
            }
            catch (error) {
                res.status(response_1.RESPONSES.BADREQUEST);
                return {
                    message: error.message,
                    error: true,
                };
            }
        };
    }
}
exports.Controller = Controller;
exports.default = new Controller();
//# sourceMappingURL=controller.js.map