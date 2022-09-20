module.exports = (app) => {
  const create = (req, res) => {
    app.services.account.save(req.body)
      .then((retorno) => res.status(201).json(retorno[0]));
  };

  return { create };
};
