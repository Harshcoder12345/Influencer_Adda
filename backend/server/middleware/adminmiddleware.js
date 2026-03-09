const AsyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const adminProtect = AsyncHandler(async (req, res, next) => {
  // console.log(req.headers);
  
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith(`Bearer`)
  ) {
    let token;
    try {
      {
        token = req.headers.authorization.split(" ")[1];
        let decoded = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = await User.findById(decoded.id).select("-password");
        if (req.user.isAdmin) {
          next();
        } else {
          res.status(401);
          throw new Error(`Only Admin can access here`);
        }
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

module.exports = adminProtect;
