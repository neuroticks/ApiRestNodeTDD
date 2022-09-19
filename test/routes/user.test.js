const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuários', () => request(app).get('/users')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  }));

test('Deve inserir usuário', () => {
  const email = `${Date.now()}@email.com.br`;
  return request(app).post('/users')
    .send({ nome: 'Zebra', email, senha: 'senha' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.nome).toBe('Zebra');
    });
});

test('Não deve inserir usuário sem nome', () => request(app).post('/users')
  .send({ email: 'zebra@email.com', senha: 'senha' })
  .then((res) => {
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Nome é atributo obrigatório.');
  }));

test('Não deve inserir usuário sem email', async () => {
  const result = await request(app).post('/users')
    .send({ nome: 'zebrinha listrada', senha: 'senha' });
  expect(result.status).toBe(400);
  expect(result.body.error).toBe('Email é atributo obrigatório.');
});
