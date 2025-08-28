import { Request, Response } from "express";
export declare class Controller {
    constructor();
    userLogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    userSignup: (req: Request, res: Response) => Promise<{
        message: any;
        error: boolean;
    }>;
}
declare const _default: Controller;
export default _default;
