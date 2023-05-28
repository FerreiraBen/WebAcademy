enum Categoria {
    Ficcao = "Ficção",
    NaoFiccao = "Não Ficção",
    Conspiracao = "Conspiração",
    Romance = "Romance",
    Comedia = "Comedia"
}
  
interface Livro {
    nome: string;
    preco: number;
    categoria?: Categoria;
    nomeAutor: string
}
  
const livros: Livro[] = [
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

type bibliotecas = "ICE" | "FT" | "FD" | "ICHL";
type map = {[biblioteca in bibliotecas]: Livro };
let biblioteque: map = {"ICE":livros[0], "FT":livros[1], "FD":livros[2], "ICHL":livros[3] };


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

  
