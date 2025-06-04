function isAuthenticated(req, res, next) {
  console.log("isAuthenticated");
  return next();
}

module.exports = { isAuthenticated };
