function signup(req, res, next) {
  //create user with the data sent in the post
  console.log("This controller was reached (Signup)");
  res.redirect("/");
}

module.exports = {
  signup,
};
