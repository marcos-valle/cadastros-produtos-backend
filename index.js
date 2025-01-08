import { fastify } from 'fastify'
import { databasePostgres } from './database-postgres.js'
import cors from '@fastify/cors'
import { on } from 'node:events'

const server = fastify()
const database = new databasePostgres()
await server.register(cors, {
    origin: '*',
})

server.post('/cadastro', async (request, reply) => {
    const { nome, valor, descricao, disponivel} = request.body

    await database.create({
        nome,
        valor,
        descricao,
        disponivel,
    })

    return reply.status(201).send()
})

server.get('/produtos', async () => {
    const produtos = await database.list()
    return produtos
})

server.put('/produtos/:produto_id', async (request) => {
    const { produto_id } = request.params
    const { nome, valor, descricao, disponivel} = request.body
    console.log(request.params)
    console.log(request.body)
    await database.update(produto_id, {
        nome,
        valor,
        descricao,
        disponivel,
    })
})

server.delete('/produtos/:produto_id', async (request) => {
    await database.delete(request.params.produto_id)
})

server.listen({
    port: process.env.PORT ?? 3000,
})