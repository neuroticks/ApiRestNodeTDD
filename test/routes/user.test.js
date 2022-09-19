const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuários', () => request(app).get('/users')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty('nome', 'rodrigo');
  }));

test.skip('Deve inserir usuário', () => request(app).post('/users')
  .send({ nome: 'Zebra', email: 'zebra@mail.com' })
  .then((res) => {
    expect(res.status).toBe(201);
    expect(res.body.nome).toBe('Zebra');
  }));
