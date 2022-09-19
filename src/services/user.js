module.exports = (app) => {
  const findAll = (filter = {}) => app.db('users').where(filter).select();

  const save = async (user) => {
    if (!user.nome) return { error: 'Nome é atributo obrigatório.' };
    if (!user.email) return { error: 'Email é atributo obrigatório.' };
    if (!user.senha) return { error: 'Senha é atributo obrigatório.' };

    const usrDb = await findAll({ email: user.email });
    if (usrDb && usrDb.length > 0) return { error: 'Já existe usuário com este email.' };

    return app.db('users').insert(user, '*');
  };
  return { findAll, save };
};
