import { randomUUID} from "node:crypto"

export class databaseMemory {
    #produtos = new Map()

    list () {
        return Array.from(this.#produtos.entries()).map((produtosArray) => {
            const id = produtosArray[0]
            const produtos = produtosArray[1]

            return {
                id,
                ...produtos,
            }
        })
    }

    create (produto) {
        const produto_id = randomUUID()

        this.#produtos.set(produto_id, produto)
    }

    update (produto_id, produto) {
        this.#produtos.set(produto_id, produto)
    }

    delete (produto_id) {
        this.#produtos.delete(produto_id)
    }
}