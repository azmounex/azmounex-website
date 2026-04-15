import { body } from "express-validator";

const createTeamValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("role").trim().notEmpty().withMessage("Role is required"),
  body("bio").trim().notEmpty().withMessage("Bio is required"),
  body("email").optional({ values: "falsy" }).isEmail().withMessage("Email must be valid"),
  body("order").optional().isInt({ min: 0 }).withMessage("Order must be a non-negative number"),
  body("linkedin").optional({ values: "falsy" }).isURL().withMessage("LinkedIn URL is invalid"),
  body("github").optional({ values: "falsy" }).isURL().withMessage("GitHub URL is invalid"),
  body("instagram").optional({ values: "falsy" }).isURL().withMessage("Instagram URL is invalid"),
  body("website").optional({ values: "falsy" }).isURL().withMessage("Website URL is invalid"),
];

const updateTeamValidator = [
  body("name").optional().trim().notEmpty().withMessage("Name cannot be empty"),
  body("role").optional().trim().notEmpty().withMessage("Role cannot be empty"),
  body("bio").optional().trim().notEmpty().withMessage("Bio cannot be empty"),
  body("email").optional({ values: "falsy" }).isEmail().withMessage("Email must be valid"),
  body("order").optional().isInt({ min: 0 }).withMessage("Order must be a non-negative number"),
  body("linkedin").optional({ values: "falsy" }).isURL().withMessage("LinkedIn URL is invalid"),
  body("github").optional({ values: "falsy" }).isURL().withMessage("GitHub URL is invalid"),
  body("instagram").optional({ values: "falsy" }).isURL().withMessage("Instagram URL is invalid"),
  body("website").optional({ values: "falsy" }).isURL().withMessage("Website URL is invalid"),
];

export { createTeamValidator, updateTeamValidator };