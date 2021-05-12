const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from server",
  });
});

router.use("/auth", require("./auth"));
router.use("/admin", require("./admin"));
router.use("/category", require("./category"));
router.post("/");

module.exports = router;
