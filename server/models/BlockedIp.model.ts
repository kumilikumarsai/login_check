import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const BlockedIpModel = sequelize.define(
  "blockedIp",
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
    tableName: "blocked_ip_model",
    modelName: "BlockedIpModel",
  }
);

export default BlockedIpModel;
