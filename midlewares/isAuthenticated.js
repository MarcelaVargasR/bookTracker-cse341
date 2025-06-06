function isAuthenticated(req, res, next) {
  console.log("isAuthenticated", req)
  if (!req?.session?.user) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  }
  next()
};

module.exports = { isAuthenticated };