import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const UserSignInModel = sequelize.define(
  "userSignIn",
  {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "userSignIn",
    modelName: "UserSignInModel",
    indexes: [
      {
        fields: ["email"],
        unique: true,
      },
    ],
  }
);
UserSignInModel.sync();

export default UserSignInModel;
