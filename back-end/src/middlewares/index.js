const jwt = require("jsonwebtoken");

module.exports.requiresSignIn = (req, res, next) => {
  console.log(req.headers);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user_id = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user_id;
    next();
  } else {
    return res.status(404).json({
      message: "please sign-in to proceed",
    });
  }
};

module.exports.userMiddleware = (req, res, next) => {};

module.exports.adminMiddleware = (req, res, next) => {
  if (req.user.role != "admin") {
    return res.status(404).json({
      message: "Admin access only...!!!",
    });
  }
  next();
};
