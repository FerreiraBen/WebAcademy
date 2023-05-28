"use strict";
class Produto {
    constructor(nome, categoria, preco, status) {
        this.codigo = Produto.codigoAtual + 1; // Código incremental
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
    }
    getCodigo() {
        return this.codigo;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    mudarStatus(status) {
        this.status = status;
    }
    adicionar() {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this.nome}, categoria: ${this.categoria}`);
    }
}
Produto.codigoAtual = 1;
class ProdutoInfantil extends Produto {
    constructor(nome, categoria, preco, status, faixa_etaria) {
        super(nome, categoria, preco, status);
        this._faixa_etaria = faixa_etaria;
        this.validarFaixaEtaria();
    }
    getFaixaEtaria() {
        return this._faixa_etaria;
    }
    setFaixaEtaria(faixa_etaria) {
        this._faixa_etaria = faixa_etaria;
        this.validarFaixaEtaria();
    }
    validarFaixaEtaria() {
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
