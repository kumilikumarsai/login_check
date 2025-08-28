import { NextFunction, Request, Response } from "express";
export declare const options: {
    errors: {
        wrap: {
            label: string;
        };
    };
};
export declare class ValidationHandler {
    signup: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>> | {
        error: boolean;
        message: string;
    }>;
    signin: (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
    emailValidation: (email: string) => Promise<any>;
    private hostnameExists;
}
declare const _default: ValidationHandler;
export default _default;
