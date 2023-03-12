const jwt = require("jsonwebtoken");
const { nextTick } = require("process");

exports.authValidation = async (req, res, next) => {
  let user;
  if(req.headers.authorization == undefined) {
    return res.status(401).send({ message: "Invalid Token" });
  }
  try {
    const decoded = jwt.verify(req.headers.authorization.split(" ")[1], process.env.salt);
    user = decoded.user;

    req.authUser = user;
  } catch(err) {
    console.log(err);
    return res.status(401).send({ message: "Invalid Token" });
  }

  next();
};
