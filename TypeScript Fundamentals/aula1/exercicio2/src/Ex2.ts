enum Categoria {
    Ficcao = "Ficção",
    NaoFiccao = "Não Ficção",
    Conspiracao = "Conspiração",
    Romance = "Romance"
}
  
interface Livro {
    nome: string;
    preco: number;
    categoria?: Categoria;
}
  
const biblioteca: Livro[] = [
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
  
