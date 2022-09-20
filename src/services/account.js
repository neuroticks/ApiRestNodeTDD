module.exports = (app) => {
  const save = (conta) => app.db('accounts').insert(conta, '*');

  return { save };
};
