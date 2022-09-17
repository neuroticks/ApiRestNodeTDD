const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/users", (req, res) => {
  const users = [{ nome: "rodrigo", email: "rodrigo@mail.com" }];
  res.status(200).json(users);
});

module.exports = app;
