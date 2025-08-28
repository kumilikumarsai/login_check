"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(config_1.default.MYSQLDB.DATABASE_NAME, config_1.default.MYSQLDB.USERNAME, config_1.default.MYSQLDB.PASSWORD, {
    host: config_1.default.MYSQLDB.HOST,
    dialect: 'mysql',
    logging: false,
    retry: {
        match: [
            /ETIMEDOUT/,
            /EHOSTUNREACH/,
            /ECONNRESET/,
            /ECONNREFUSED/,
            /ETIMEDOUT/,
            /ESOCKETTIMEDOUT/,
            /EHOSTUNREACH/,
            /EPIPE/,
            /EAI_AGAIN/,
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/,
        ],
        max: 5,
    },
    pool: {
        max: 15,
        min: 1,
        idle: 20000,
        evict: 15000,
        acquire: 30000
    },
});
sequelize
    .authenticate()
    .then(() => {
    console.info('INFO - Database connected.');
})
    .catch((err) => {
    console.error('ERROR - Unable to connect to the database:', err);
});
if (config_1.default.NODE_ENV === 'dev') {
    sequelize
        .sync({ alter: true })
        .then(() => {
        console.log('All Models synced succesfully:');
    })
        .catch((error) => {
        console.log('Error syncing db models: ', error);
    });
}
exports.default = sequelize;
sequelize.authenticate();
//# sourceMappingURL=connection.js.map