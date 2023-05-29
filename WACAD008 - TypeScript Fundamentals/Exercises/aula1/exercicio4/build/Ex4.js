"use strict";
var Categoria;
(function (Categoria) {
    Categoria["Ficcao"] = "Fic\u00E7\u00E3o";
    Categoria["NaoFiccao"] = "N\u00E3o Fic\u00E7\u00E3o";
    Categoria["Conspiracao"] = "Conspira\u00E7\u00E3o";
    Categoria["Romance"] = "Romance";
    Categoria["Comedia"] = "Comedia";
})(Categoria || (Categoria = {}));
const livros = [
    {
        nome: "A volta ao mudo em 800 dias",
        preco: 29.99,
        categoria: Categoria.Ficcao,
        nomeAutor: "julio vermes"
    },
    {
        nome: "MobyDick",
        preco: 19.99,
        categoria: Categoria.Conspiracao,
        nomeAutor: "herman malvil"
    },
    {
        nome: "Romeu e Juliette",
        preco: 39.99,
        categoria: Categoria.Romance,
        nomeAutor: "William Smith"
    },
    {
        nome: "A Divina Comedia",
        preco: 15.50,
        categoria: Categoria.Comedia,
        nomeAutor: "Dante Aliguieiri"
    }
];
let biblioteque = { "ICE": livros[0], "FT": livros[1], "FD": livros[2], "ICHL": livros[3] };
// PENDING SOLUTION ! ! ! ! ! 
console.log("ICE:");
console.log(biblioteque.ICE);
console.log("----------------------------");
console.log("FT:");
console.log(biblioteque.FT);
console.log("----------------------------");
console.log("FD:");
console.log(biblioteque.FD);
console.log("----------------------------");
console.log("ICHL:");
console.log(biblioteque.ICHL);
console.log("----------------------------");
