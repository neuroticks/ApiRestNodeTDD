const app = require("express")();

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/users", (req, res) => {
  const users = [{ nome: "rodrigo", email: "rodrigo@mail.com" }];
  res.status(200).json(users);
});


app.post('/users', (req, res)=>{
  res.status(201).json(req.body)
})

module.exports = app;