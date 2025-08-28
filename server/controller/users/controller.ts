import { Request, Response } from "express";
import { RESPONSES } from "../../constants/response";
import { MESSAGES } from "../../constants/messages";
import UserHelper from "../../helpers/user.helper";
import UserModel from "../../models/user.model";
import userHelper from "../../helpers/user.helper";

export class Controller {
  constructor() {}

  userLogin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(RESPONSES.BADREQUEST).send({
          message: MESSAGES.USER.LOGIN.INVALID,
          error: true,
        });
      }

      const userInfo: any = await UserHelper.getUserInfoByEmail(email);
      
      if (!userInfo) {
        return res.status(RESPONSES.BADREQUEST).send({
          message: MESSAGES.USER.LOGIN.MAIL_NOT_FOUND,
          error: true,
        });
      }

      // Simple password check (you should implement proper password hashing)
      if (userInfo.password === password) {
        return res.status(RESPONSES.SUCCESS).send({
          userId: userInfo.id,
          email: userInfo.email,
          message: MESSAGES.USER.LOGIN.SUCCESS,
          error: false,
        });
      } else {
        // Add wrong password counter
        await UserHelper.addWrongPasswordCounter(email);
        
        return res.status(RESPONSES.BADREQUEST).send({
          message: MESSAGES.USER.LOGIN.WRONG_PASSWORD,
          error: true,
        });
      }
    } catch (error: any) {
      console.log("user login error:: ", error);
      return res.status(RESPONSES.BADREQUEST).send({
        message: error.message,
        error: true,
      });
    }
  };

  userSignup = async (req: Request, res: Response) => {
    try {
      const reqBody: { email: string; password: string } = req.body;
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

      const createUser = await UserModel.create(user);
      if (createUser) {
        res.status(RESPONSES.SUCCESS);
        return {
          message: MESSAGES.USER.REGISTER.SUCCESS,
          error: false,
        };
      }
      res.status(RESPONSES.BADREQUEST);
      return {
        error: true,
        message: MESSAGES.USER.REGISTER.REGISTRATION_FAILED,
      };
    } catch (error: any) {
      res.status(RESPONSES.BADREQUEST);
      return {
        message: error.message,
        error: true,
      };
    }
  };
}

export default new Controller();
