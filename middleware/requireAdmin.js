const jwt = require("jsonwebtoken");
const { JWT_ADMIN } = require("../config/keys");

//mongoDB
const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  // authorization === Bearer qpmcskjvbhjdfziod
  if (!authorization) {
    return res.status(401).json({ error: "Admin must be logged in!" });
  }
  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, JWT_ADMIN, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Admin must be logged in!" });
    }

    const { _id } = payload;
    Admin.findById(_id).then((admindata) => {
      req.admin = admindata;
      next();
    });
  });
};
