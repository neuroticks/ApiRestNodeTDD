module.exports = (app) => {
  const findAll = () => app.db('users').select();

  const save = (user) => {
    if (!user.nome) return { error: 'Nome é atributo obrigatório.' };

    return app.db('users').insert(user, '*');
  };
  return { findAll, save };
};
