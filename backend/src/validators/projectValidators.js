import { body } from "express-validator";

const createProjectValidator = [
  body("title").trim().notEmpty().withMessage("Project title is required"),
  body("description").trim().notEmpty().withMessage("Project description is required"),
  body("category").trim().notEmpty().withMessage("Project category is required"),
  body("order").optional().isInt({ min: 0 }).withMessage("Order must be a non-negative number"),
  body("projectUrl").optional({ values: "falsy" }).isURL().withMessage("Project link must be a valid URL"),
];

const updateProjectValidator = [
  body("title").optional().trim().notEmpty().withMessage("Project title cannot be empty"),
  body("description").optional().trim().notEmpty().withMessage("Project description cannot be empty"),
  body("category").optional().trim().notEmpty().withMessage("Project category cannot be empty"),
  body("order").optional().isInt({ min: 0 }).withMessage("Order must be a non-negative number"),
  body("projectUrl").optional({ values: "falsy" }).isURL().withMessage("Project link must be a valid URL"),
];

export { createProjectValidator, updateProjectValidator };