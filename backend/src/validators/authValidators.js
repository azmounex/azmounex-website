import { body } from "express-validator";

const loginValidator = [
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("password").isString().notEmpty().withMessage("Password is required"),
];

export { loginValidator };