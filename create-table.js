import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS produtos;`.then(() => {
//     console.log("Tabela deletada com sucesso");
// })

sql `
CREATE TABLE produtos (
    id TEXT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valor NUMERIC(10, 2) NOT NULL,
    descricao TEXT,
    disponivel BOOLEAN NOT NULL
);
`.then(() => {
    console.log("Tabela criada com sucesso");
})

