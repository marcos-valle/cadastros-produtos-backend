import { randomUUID} from "node:crypto"
import { sql } from "./db.js"

export class databasePostgres {
    #produtos = new Map()

     async list () {
        let produtos = await sql`SELECT * FROM produtos ORDER BY valor ASC`
        return await produtos
    }

    async create (produto) {
        const produto_id = randomUUID()
        const { nome, valor, descricao, disponivel } = produto
        
        await sql`
            INSERT INTO produtos (id, nome, valor, descricao, disponivel)
            VALUES (${produto_id}, ${nome}, ${valor}, ${descricao}, ${disponivel})
        `
    }

    async update (produto_id, produto) {
        const { nome, valor, descricao, disponivel } = produto
        await sql`
            UPDATE produtos SET nome = ${nome}, valor = ${valor}, descricao = ${descricao}, disponivel = ${disponivel} WHERE id = ${produto_id}`
    }

    async delete (produto_id) {
        await sql`DELETE FROM produtos WHERE id = ${produto_id}`
    }
}