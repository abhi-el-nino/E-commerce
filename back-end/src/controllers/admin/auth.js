const UsersCollection = require("../../models/user");
const jwt = require("jsonwebtoken");
module.exports.signUp = (req, res) => {
  UsersCollection.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      console.log("err", error);
      return res.status(400).json({
        message: "Somthing went wrong....",
      });
    }

    if (user) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    const { firstName, lastName, email, password } = req.body;

    const _user = new UsersCollection({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
      role: "admin",
    });

    _user.save((error, newUser) => {
      if (error) {
        console.log("err", error);
        return res.status(400).json({
          message: "Somthing went wrong....",
        });
      }

      return res.status(201).json({
        message: "Admin created successfully",
      });
    });
  });
};

module.exports.signIn = (req, res) => {
  UsersCollection.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "somthing went wrong...",
      });
    }
    if (!user) {
      return res.status(404).json({
        message: "No such user exists...",
      });
    }

    if (user.authenticate(req.body.password) && user.role === "admin") {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      const { _id, firstName, lastName, email, role, fullName } = user;
      return res.status(200).json({
        token,
        user: {
          _id,
          firstName,
          lastName,
          email,
          role,
          fullName,
        },
      });
    } else {
      return res.status(404).json({
        message: "invalid password...",
      });
    }
  });
};

module.exports.requiresSignIn = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user_id = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user_id;
  next();
};
