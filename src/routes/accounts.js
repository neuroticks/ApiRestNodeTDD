module.exports = (app) => {
  const create = (req, res) => {
    app.services.account.save(req.body)
      .then((retorno) => res.status(201).json(retorno[0]));
  };

  const retornaTodas = (req, res) => {
    app.services.account.findAll()
      .then((retorno) => res.status(200).json(retorno));
  };

  return { create, retornaTodas };
};
