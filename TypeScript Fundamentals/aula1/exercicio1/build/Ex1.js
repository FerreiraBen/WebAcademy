"use strict";
const biblioteca = [
    {
        nome: "A volta ao mudo em 800 dias",
        preco: 29.99,
        categoria: "Ficcao"
    },
    {
        nome: "O Código da Vice",
        preco: 19.99,
        categoria: "Conspiracao"
    },
    {
        nome: "Romeu e Juliette",
        preco: 39.99,
        categoria: "Romance"
    }
];
biblioteca.forEach((livro) => {
    console.log(`Nome: ${livro.nome}`);
    console.log(`Preço: ${livro.preco}`);
    if (livro.categoria) {
        console.log(`Categoria: ${livro.categoria}`);
    }
    console.log("----------------------------");
});
