import express from "express";
import controller from "./controller";
import Validation from "../../middleware/validation.helper";
export default express
  .Router()
  .post("/login", Validation.signin, controller.userLogin)
  .post("/register", Validation.signup, controller.userSignup);
