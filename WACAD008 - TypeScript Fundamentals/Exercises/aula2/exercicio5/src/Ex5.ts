type Status = "EM_ESTOQUE" | "ESGOTADO";

class Produto {
  private static codigoAtual: number = 1;
  private codigo: number;
  private nome: string;
  private categoria: string;
  private preco: number;
  protected status: Status;

  constructor(nome: string, categoria: string, preco: number, status: Status) {
    this.codigo = Produto.codigoAtual + 1; // Código incremental
    this.nome = nome;
    this.categoria = categoria;
    this.preco = preco;
    this.status = status;
  }

  public getCodigo(): number {
    return this.codigo;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public setCategoria(categoria: string): void {
    this.categoria = categoria;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }

  protected mudarStatus(status: Status): void {
    this.status = status;
  }

  public adicionar(): void {
    this.mudarStatus("EM_ESTOQUE");
    console.log(`Produto ${this.nome}, categoria: ${this.categoria}`);
  }
}

class ProdutoInfantil extends Produto {
  private _faixa_etaria: number;

  constructor(nome: string, categoria: string, preco: number, status: Status, faixa_etaria: number) {
    super(nome, categoria, preco, status);
    this._faixa_etaria = faixa_etaria;
    this.validarFaixaEtaria();
  }

  public getFaixaEtaria(): number {
    return this._faixa_etaria;
  }

  public setFaixaEtaria(faixa_etaria: number): void {
    this._faixa_etaria = faixa_etaria;
    this.validarFaixaEtaria();
  }

  private validarFaixaEtaria(): void {
    if (this._faixa_etaria > 12) {
      console.log("Faixa etária inválida para produtos infantis.");
      this._faixa_etaria = 12;
    }
  }
}


const produto1 = new Produto("Monster Energy Drink", "Bebidas", 9.99, "EM_ESTOQUE");
console.log("Produto 1 - Código:", produto1.getCodigo());
console.log("Produto 1 - Nome:", produto1.getNome());
console.log("Produto 1 - Categoria:", produto1.getCategoria());
console.log("Produto 1 - Preço:", produto1.getPreco());
//console.log("Produto 1 - Status:", produto1.status); // error - modificador de acesso
produto1.adicionar();

const produtoInfantil1 = new ProdutoInfantil("Brinquedo Educativo", "Brinquedos", 19.99, "EM_ESTOQUE", 8);
console.log("Produto Infantil 1 - Código:", produtoInfantil1.getCodigo());
console.log("Produto Infantil 1 - Nome:", produtoInfantil1.getNome());
console.log("Produto Infantil 1 - Categoria:", produtoInfantil1.getCategoria());
console.log("Produto Infantil 1 - Preço:", produtoInfantil1.getPreco());
//console.log("Produto Infantil 1 - Status:", produtoInfantil1.status); // error - modificador de acesso
console.log("Produto Infantil 1 - Faixa Etária:", produtoInfantil1.getFaixaEtaria());
produtoInfantil1.setFaixaEtaria(10); // Alterando a faixa etária
console.log("Produto Infantil 1 - Nova Faixa Etária:", produtoInfantil1.getFaixaEtaria());
produtoInfantil1.adicionar();
