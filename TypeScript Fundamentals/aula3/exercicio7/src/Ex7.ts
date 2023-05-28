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
      nome: "MobyDick",
      preco: 19.99,
      categoria: Categoria.Conspiracao
    },
    {
      nome: "Romeu e Juliette",
      preco: 39.99
    }
  ];


  // PENDING SOLUTION ! ! ! ! ! 
  
  biblioteca.forEach((livro) => {
    // Modificando:
    // livro.nome = livro.nome.split(" ").length > 1 ? livro.nome : livro.nome.toUpperCase();

    // Apenas imprimir:
    livro.nome.split(" ").length > 1 ? console.log(`Nome: ${livro.nome}`) : console.log(`Nome: ${livro.nome.toUpperCase()}`);
    
    console.log(`Preço: ${livro.preco}`);
    if (livro.categoria) {
      console.log(`Categoria: ${livro.categoria}`);
    }
    console.log("----------------------------");
  });
  
