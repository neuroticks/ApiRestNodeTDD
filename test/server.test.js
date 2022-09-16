const supertest = require('supertest');

const request = supertest('http://localhost:3001');

test('Deve responder na porta 3001', async () => {
  // acessar a url http://localhost:3001
  const res = await request.get('/');
  return expect(res.status).toBe(200);
});
