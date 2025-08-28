import { Request, Response } from "express";
import { RESPONSES } from "../../constants/response";
import { MESSAGES } from "../../constants/messages";
import UserHelper from "../../helpers/user.helper";
import UserModel from "../../models/user.model";
import userHelper from "../../helpers/user.helper";

export class Controller {
  constructor() {}

  // userLogin = async (req: Request, res: Response) => {
  //   try {
  //     const filter = req.params.filter;
  //     if (filter === "email") {
  //       const email = req.body.email;
  //       const otp = req.body.otp;
  //       const userInfo: any = await UserHelper.getUserInfoByEmail({ email });
  //       const verify = await UserHelper.verifyOtp(
  //         userInfo.userId.toString(),
  //         otp
  //       );
  //       const getuserDetails = await UserHelper.getUserInfoDetails(userInfo.userId);
  //       if (!verify.error) {
  //         const updateCounter=await userHelper.updateCounter(userInfo.userId)
  //         return res.status(RESPONSES.SUCCESS).send({
  //           userId: userInfo.userId,
  //           username:getuserDetails.username,
  //           studentName:getuserDetails.studentName,
  //           message: MESSAGES.USER.LOGIN.SUCCESS,
  //           error: false,
  //         });
  //       }
  //       return res.status(RESPONSES.BADREQUEST).send({
  //         message: MESSAGES.USER.LOGIN.OTP_EXPIRED,
  //         error: true,
  //       });
  //     } else if (filter === "mobile") {
  //       const phonenumber = req.body.phonenumber;
  //       const otp = req.body.otp;
  //       const userInfo: any = await UserHelper.getUserInfoByPhone({
  //         phonenumber,
  //       });
  //       const verify = await UserHelper.verifyOtp(
  //         userInfo.userId.toString(),
  //         otp.toString()
  //       );
  //       if (!verify.error) {
  //         return res.status(RESPONSES.SUCCESS).send({
  //           userId: userInfo.userId,
  //           message: MESSAGES.USER.LOGIN.SUCCESS,
  //           error: false,
  //         });
  //       }
  //       return res.status(RESPONSES.BADREQUEST).send({
  //         message: MESSAGES.USER.LOGIN.OTP_EXPIRED,
  //         error: true,
  //       });
  //     }
  //     return res.status(RESPONSES.BADREQUEST).send({
  //       message: MESSAGES.USER.LOGIN.INVALID,
  //       error: true,
  //     });
  //   } catch (error: any) {
  //     console.log("user login error:: ", error);
  //     return res.status(RESPONSES.BADREQUEST).send({
  //       message: error.message,
  //       error: true,
  //     });
  //   }
  // };

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
