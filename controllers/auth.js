function login(req, res) {
  res.json({
    message: "login",
  });
}

function register(req, res) {
  res.json({
    message: "register",
  });
}

function logout(req, res) {
  res.json({
    message: "logout",
  });
}

module.exports = { login, register, logout };
