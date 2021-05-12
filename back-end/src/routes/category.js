const express = require("express");
const { create, getCategories } = require("../controllers/category");
const { requiresSignIn, adminMiddleware } = require("../middlewares");
const router = express.Router();

router.post("/create", requiresSignIn, adminMiddleware, create);
router.get("/get-categories", getCategories);
module.exports = router;
