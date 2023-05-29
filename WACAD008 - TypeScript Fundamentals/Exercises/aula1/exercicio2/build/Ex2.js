"use strict";
var Categoria;
(function (Categoria) {
    Categoria["Ficcao"] = "Fic\u00E7\u00E3o";
    Categoria["NaoFiccao"] = "N\u00E3o Fic\u00E7\u00E3o";
    Categoria["Conspiracao"] = "Conspira\u00E7\u00E3o";
    Categoria["Romance"] = "Romance";
})(Categoria || (Categoria = {}));
const biblioteca = [
    {
        nome: "A volta ao mudo em 800 dias",
        preco: 29.99,
        categoria: Categoria.Ficcao
    },
    {
        nome: "O Código da Vice",
        preco: 19.99,
        categoria: Categoria.Conspiracao
    },
    {
        nome: "Romeu e Juliette",
        preco: 39.99
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
