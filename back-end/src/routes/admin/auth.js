const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  requiresSignIn,
} = require("../../controllers/admin/auth");

router.post("/sign-up", signUp);

router.post("/sign-in", signIn);

router.get("/profile", requiresSignIn, (req, res) => {
  console.log(req.user);
  return res.status(200).json({
    profile: "abc",
  });
});

module.exports = router;
