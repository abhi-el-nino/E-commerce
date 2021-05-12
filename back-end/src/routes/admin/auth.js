const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  requiresSignIn,
} = require("../../controllers/admin/auth");
const {
  validateSignUpRequest,
  validateSignInRequest,
  isRequestValidated,
} = require("../../validators/auth");

router.post("/sign-up", validateSignUpRequest, isRequestValidated, signUp);

router.post("/sign-in", validateSignInRequest, isRequestValidated, signIn);

router.get("/profile", requiresSignIn, (req, res) => {
  console.log(req.user);
  return res.status(200).json({
    profile: "abc",
  });
});

module.exports = router;
