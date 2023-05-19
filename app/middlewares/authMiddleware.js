const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  

  try {
    const token = req.headers.autorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Пароль не авторизирован" });
    }
    //verifications
    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: "Пароль не авторизирован" });
  }
};
