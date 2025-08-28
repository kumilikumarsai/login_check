"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationHandler = exports.options = void 0;
const response_1 = require("../constants/response");
const joi_1 = __importDefault(require("joi"));
const messages_1 = require("../constants/messages");
const user_model_1 = __importDefault(require("../../server/models/user.model"));
const dnsPromises = require("dns2");
exports.options = {
    errors: {
        wrap: {
            label: "",
        },
    },
};
const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
};
const dns = new dnsPromises(exports.options);
const joiOptions = {
    errors: {
        wrap: {
            label: "",
        },
    },
};
class ValidationHandler {
    constructor() {
        this.signup = async (req, res, next) => {
            try {
                let reqBody = req.body;
                if (reqBody.email) {
                    const emailInfo = await this.emailValidation(reqBody.email);
                    if (emailInfo.error) {
                        return res.status(response_1.RESPONSES.BADREQUEST).send({
                            message: emailInfo.message,
                            error: true,
                        });
                    }
                }
                let transSchema = joi_1.default.object({
                    email: joi_1.default.string().trim().email().required(),
                    password: joi_1.default.string().required(),
                });
                const { error } = transSchema.validate(reqBody, joiOptions);
                if (error)
                    throw {
                        message: error.details[0].message,
                    };
                const userRegOtpDetails = await user_model_1.default.findOne({
                    where: [{ email: req.body.email }],
                });
                if (userRegOtpDetails) {
                    return {
                        error: true,
                        message: messages_1.MESSAGES.USER.REGISTER.ALREADY_REGISTERED,
                    };
                }
                return next();
            }
            catch (error) {
                console.log("error in signup", error);
                res.status(error.status ? error.status : response_1.RESPONSES.BADREQUEST).send({
                    message: error.message,
                    error: true,
                });
            }
        };
        this.signin = async (req, res, next) => {
            try {
                const reqBody = req.body;
                if (reqBody.email) {
                    const emailInfo = await this.emailValidation(reqBody.email);
                    if (emailInfo.error) {
                        return res.status(response_1.RESPONSES.BADREQUEST).send({
                            message: emailInfo.message,
                            error: true,
                        });
                    }
                }
                let transSchema = joi_1.default.object({
                    email: joi_1.default.string().trim().email().required(),
                    password: joi_1.default.string().trim().required(),
                });
                const { error } = transSchema.validate(reqBody, joiOptions);
                if (error)
                    throw {
                        message: error.details[0].message,
                    };
                return next();
            }
            catch (error) {
                res.status(error.status ? error.status : response_1.RESPONSES.BADREQUEST).send({
                    message: error.message,
                    error: true,
                });
            }
        };
        this.emailValidation = async (email) => {
            try {
                let domainValidate = email.substring(email.lastIndexOf("@") + 1);
                const responseHostmane = await this.hostnameExists(domainValidate);
                if (!responseHostmane.exists) {
                    throw {
                        message: messages_1.MESSAGES.USER.REGISTER.MAIL_VALIDATION_FAIL,
                    };
                }
                return {
                    error: false,
                    message: messages_1.MESSAGES.USER.REGISTER.MAIL_VALIDATION_SUCCESS,
                    status: response_1.RESPONSES.SUCCESS,
                };
            }
            catch (error) {
                return {
                    error: true,
                    status: error.status ? error.status : response_1.RESPONSES.BADREQUEST,
                    message: error.message,
                };
            }
        };
        this.hostnameExists = async (hostname) => {
            try {
                const result = await dns.resolveA(hostname);
                return { exists: result.answers.length };
            }
            catch (_) {
                return { exists: false };
            }
        };
    }
}
exports.ValidationHandler = ValidationHandler;
exports.default = new ValidationHandler();
//# sourceMappingURL=validation.helper.js.map