module.exports = (app) => {
  const findAll = () => app.db('users').select();

  const save = (user) => {
    if (!user.nome) return { error: 'Nome é atributo obrigatório.' };
    if (!user.email) return { error: 'Email é atributo obrigatório.' };
    if (!user.senha) return { error: 'Senha é atributo obrigatório.' };

    return app.db('users').insert(user, '*');
  };
  return { findAll, save };
};
