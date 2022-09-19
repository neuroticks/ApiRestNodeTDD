const request = require('supertest');

const app = require('../../src/app');

const email = `${Date.now()}@email.com.br`;

test('Deve listar todos os usuários', () => request(app).get('/users')
  .then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  }));

test('Deve inserir usuário', () => request(app).post('/users')
  .send({ nome: 'Zebra', email, senha: 'senha' })
  .then((res) => {
    expect(res.status).toBe(201);
    expect(res.body.nome).toBe('Zebra');
  }));

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

test('Não deve inserir usuário sem senha', (terminou) => {
  request(app).post('/users')
    .send({ nome: 'zebrinha listrada', email: 'zebrinha@email.com' })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Senha é atributo obrigatório.');
      terminou();
    });
});

test('Não deve inserir usuário com email repetido', () => request(app).post('/users')
  .send({ nome: 'Zebra da Silva', email, senha: 'nova-senha' })
  .then((res) => {
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Já existe usuário com este email.');
  }));
