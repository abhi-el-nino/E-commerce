const express = require("express");
const router = express.Router();
router.post("/sign-in", (req, res) => {
  return res.status(200).json({
    message: "Hello from server",
  });
});

router.post("/sign-up", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from server",
  });
});

router.post("/");

module.exports = router;
