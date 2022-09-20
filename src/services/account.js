module.exports = (app) => {
  const save = (conta) => app.db('accounts').insert(conta, '*');

  const findAll = () => app.db('accounts');

  return { save, findAll };
};
