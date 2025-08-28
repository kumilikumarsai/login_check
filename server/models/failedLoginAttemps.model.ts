import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const FailedLoginAttemptModel = sequelize.define(
  "failedLogin",
  {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    ip: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: "failed_login_attempts_model",
    modelName: "FailedLoginAttemptModel",
  }
);

export default FailedLoginAttemptModel;
