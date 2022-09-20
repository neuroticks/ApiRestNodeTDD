const request = require('supertest');

const app = require('../../src/app');

const ROTA_DE_CONTAS = '/accounts';
let usuario;

beforeAll(async () => {
  const res = await app.services.user
    .save({ nome: 'Nome Usuário Account', email: `${Date.now()}@email.com`, senha: '123' });

  usuario = { ...res[0] };
});

const nomeContaTeste = 'Conta Testes #1';

test('Deve inserir uma conta para um usuário', () => request(app).post(ROTA_DE_CONTAS)
  .send({ nome: nomeContaTeste, user_id: usuario.id })
  .then((retorno) => {
    expect(retorno.status).toBe(201);
    expect(retorno.body.nome).toBe(nomeContaTeste);
  }));
