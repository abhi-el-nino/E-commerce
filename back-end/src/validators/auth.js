const { body, check, validationResult } = require("express-validator");
module.exports.validateSignUpRequest = [
  check("firstName").notEmpty().withMessage("first name is required"),
  check("lastName").notEmpty().withMessage("last name is required"),
  check("email").isEmail().withMessage("valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should be minimum 6 character long"),
];

module.exports.validateSignInRequest = [
  check("email").isEmail().withMessage("valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should be minimum 6 character long"),
];

module.exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  next();
};
