var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");

/* GET users listing. */
// /users
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// /users/signup
router.get("/signup", usersCtrl.signup);

// /users/users/login    YOU DONT WANT TO DO THIS
router.get("/users/login", function (req, res) {
  res.send("<h1>you got /users/users</h1>");
});

module.exports = router;
