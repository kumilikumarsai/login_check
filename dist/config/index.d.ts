declare const _default: {
    MYSQLDB: {
        DATABASE_NAME: string;
        USERNAME: string;
        PASSWORD: string;
        HOST: string;
    };
    RUNNING_PORT: number;
    NODE_ENV: string;
    WHITELISTED_DOMAINS: (string | undefined)[];
    JWT: {
        ACCESS_SECRET: string | undefined;
        REFRESH_TOKEN: string | undefined;
        ISSUER: string | undefined;
        EXPIRES_IN: string | undefined;
    };
};
export default _default;
