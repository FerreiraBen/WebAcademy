type DadosConta = {
  nome: string;
  numero: string;
  endereco?: string;
}

// Classe Pai (abstrata)
abstract class ContaBanco {
  abstract abrirConta(dados: DadosConta): boolean;
  abstract sacar(valor: number): void;
  abstract depositar(valor: number): void;
}

// Conta Pessoa Física - herda ContaBanco
class PessoaFisica extends ContaBanco {
  nome: string;
  numero: string;
  endereco?: string;
  saldo: number;

  constructor(dados: DadosConta) {
    super();
    this.nome = dados.nome;
    this.numero = dados.numero;
    this.endereco = dados.endereco;
    this.saldo = 0;
  }

  abrirConta(dados: DadosConta): boolean {
    console.log(`Nova conta Pessoa Física criada com sucesso: ${dados.nome}`);
    return true;
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log(`Insira um valor válido!`);
    }
    else if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente para realizar o saque.`);
    }
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log(`Insira um valor válido!`);
    }
    else {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
  }

  transferir(valor: number, contaDestino: ContaBanco): void {
    if (valor <= 0) {
      console.log(`Insira um valor válido!`);
    }
    else if (valor <= this.saldo) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
      console.log(`Transferencia de R$${valor} realizado com sucesso! Novo saldo: R$${this.saldo}`);
    }
    else {
      console.log(`Saldo insuficiente para realizar a transferencia.`);
    }
  }


}

// Conta Pessoa Juridica - herda ContaBanco
class PessoaJuridica extends ContaBanco {
  nome: string;
  numero: string;
  endereco?: string;
  saldo: number;

  constructor(dados: DadosConta) {
    super();
    this.nome = dados.nome;
    this.numero = dados.numero;
    this.endereco = dados.endereco;
    this.saldo = 0;
  }

  abrirConta(dados: DadosConta): boolean {
    console.log(`Nova conta Pessoa Jurídica criada com sucesso: ${dados.nome}`);
    return true;
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log(`Insira um valor válido!`);
    }
    else if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
    else {
      console.log(`Saldo insuficiente para realizar o saque.`);
    }
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log(`Insira um valor válido!`);
    }
    else {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

  }

  transferir(valor: number, contaDestino: ContaBanco): void {
    if (valor <= 0) {
      console.log(`Insira um valor válido!`);
    }
    else if (valor <= this.saldo) {
      this.saldo -= valor;
      contaDestino.depositar(valor);
      console.log(`Transferencia de R$${valor} realizado com sucesso! Novo saldo: R$${this.saldo}`);
    }
    else {
      console.log(`Saldo insuficiente para realizar a transferencia.`);
    }
  }


}

// Cliente. Possui nome e array de contas de banco (podendo estas serem PF ou-inclusivo PJ)
class Cliente {
  nome: string;
  contas: ContaBanco[];

  constructor(nome: string) {
    this.nome = nome;
    this.contas = [];
  }

  adicionarConta(conta: ContaBanco): void {
    this.contas.push(conta);
  }


}


// testando os métodos

const cliente1 = new Cliente("Josias Cavalcante");
const contaPFJosias = new PessoaFisica({ nome: "Josias Cavalcante", numero: "666-6", endereco: "Rua Mario Ypiranga" });

const cliente2 = new Cliente("Mayara");
const contaPJMayara = new PessoaJuridica({ nome: "UFAM WebAcademy", endereco: "UFAM - rodrigo otário", numero: "777" });

cliente1.adicionarConta(contaPFJosias);
cliente2.adicionarConta(contaPJMayara);

contaPFJosias.depositar(900); // saldo + dep
contaPJMayara.depositar(5000); // saldo + dep

contaPFJosias.sacar(200); // 900 - 200 = 700      (saque sucedido)
contaPJMayara.sacar(10000); // 5000 - 10000 <0    (saque falho - falta saldo)

contaPFJosias.transferir(100, contaPJMayara); // transferencia

console.log("CONTAS DO JOSIAS:");
console.log(cliente1.contas);  // Mostrar todas as contas do cliente
console.log("-----------------------------------");
console.log("CONTAS DA MAYARA:");
console.log(cliente2.contas);  // Mostrar todas as contas do cliente
console.log("-----------------------------------");
