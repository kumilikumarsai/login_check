declare class UserHelper {
    getUserInfoByEmail(email: string): Promise<import("sequelize").Model<any, any> | {
        error: boolean;
        message: any;
        status: number;
    } | null>;
    addWrongPasswordCounter(email: string): Promise<{
        error: boolean;
        message?: undefined;
        status?: undefined;
    } | {
        error: boolean;
        message: any;
        status: number;
    }>;
    blockUser(email: string, blockStatus: boolean): Promise<{
        error: boolean;
        message?: undefined;
    } | {
        error: boolean;
        message: string;
    }>;
}
declare const _default: UserHelper;
export default _default;
