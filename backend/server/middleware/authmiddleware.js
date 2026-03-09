const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const private = AsyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith(`Bearer`)
  ) {
    try {
   
      {
        let token;
        token = req.headers.authorization.split(" ")[1];
        let decoded = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = await User.findById(decoded.id).select("-password");
        next()
      }
    } catch (error) {
      res.status(401);
      throw new Error(error.message);
    }
  } else {
    res.status(401);
    throw new Error("Invalid token : Access Denied");
  }
});

module.exports = private;


