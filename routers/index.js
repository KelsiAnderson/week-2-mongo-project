const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/login", (req, res) => {
  res.send("Login");
});

router.get("/signup", (req, res) => {
  res.send("Signup");
});

module.exports = router;
