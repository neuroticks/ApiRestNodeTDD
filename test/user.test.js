const request = require('supertest')

const app = require('../src/app')

test('Deve listar todos os usuários', ()=>{
    return request(app).get('/users')
    .then((res) =>{
        expect(res.status).toBe(200)
        expect(res.body[0]).toHaveProperty('nome','rodrigo')
    })
})

test('Deve inserir usuário',()=>{
    return request(app).post('/users')
    .send({nome:'Zebra', email:'zebra@mail.com'})
    .then((res)=>{
        expect(res.status).toBe(201)
        expect(res.body.nome).toBe('Zebra')
    })
})