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
