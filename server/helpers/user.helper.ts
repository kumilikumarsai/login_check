import UserModel from "../../server/models/user.model";
import { RESPONSES } from "../constants/response";
import { MESSAGES } from "../constants/messages";
import UserSignInModel from "../models/userSignIn.model";

class UserHelper {
  public async getUserInfoByEmail(email: string) {
    try {
      return await UserModel.findOne({
        where: {
          email: email,
        },
        raw: true,
      });
    } catch (err: any) {
      return {
        error: true,
        message: err.message,
        status: RESPONSES.BADREQUEST,
      };
    }
  }

  public async addWrongPasswordCounter(email: string) {
    try {
      const getUserSignInDetails: any = await UserSignInModel.findOne({
        where: { email: email },
      });
      console.log("000000");

      if (!getUserSignInDetails) {
        const addCount = await UserSignInModel.create({
          email: email,
          count: 1,
        });
      } else {
        if (getUserSignInDetails.count != 4) {
          const updateCount = await UserSignInModel.update(
            { count: getUserSignInDetails?.count + 1 },
            { where: { email: email } }
          );
        } else {
          const blockUser = await this.blockUser(email, true);
        }
      }

      return {
        error: false,
      };
    } catch (err: any) {
      return {
        error: true,
        message: err.message,
        status: RESPONSES.BADREQUEST,
      };
    }
  }

  public async blockUser(email: string, blockStatus: boolean) {
    try {
      console.log(new Date().toISOString(), "000000------");
      const removeRecord = await UserSignInModel.destroy({
        where: { email: email },
      });
      const blockUser = await UserModel.update(
        { blocked: blockStatus, blockedTime: new Date() },
        { where: { email: email } }
      );
      return {
        error: false,
      };
    } catch (err: any) {
      return {
        error: true,
        message: "Error while blocking the user",
      };
    }
  }
}

export default new UserHelper();
