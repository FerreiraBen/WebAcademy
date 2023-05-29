enum Turno {
  Manha = 'Manha',
  Tarde = 'Tarde',
  Noite = 'Noite'
}

// Area pode ser Enum, Interface ou Classe
enum Area {
  Humanas = 'Humanas',
  Biologicas = 'Biologicas',
  Exatas = 'Exatas'
}

// Função validadora para decorator
function validarTamanhoDescricao(minLength: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (descricao: string, ...args: any[]) {
      if (descricao.length < minLength) {
        throw new Error(`A descrição deve ter no mínimo ${minLength} caracteres.`);
      }

      return originalMethod.apply(this, [descricao, ...args]);
    };

    return descriptor;
  };
}

class Turma {
  // contadorId tera valor static para toda a classe e objetos da classe (sera o mesmo)
  private static contadorId: number = 1;
  // id inalteravel (e unico - criterio incremental)
  readonly id: number;
  descricao: string;
  turno: Turno;
  curso: {
    nome: string;
    area: Area;
  };

  constructor(descricao: string, turno: Turno, nomeCurso: string, area: Area) {
    // validação simples in-constructor
    if (descricao.length < 10) {
      throw new Error('A descrição deve ter no mínimo 10 caracteres.');
    }

    this.id = Turma.contadorId++;
    this.descricao = descricao;
    this.turno = turno;
    this.curso = {
      nome: nomeCurso,
      area: area
    };
  }

  // validação com decorator para alterações
  @validarTamanhoDescricao(10)
  setDescricao(descricao: string) {
    this.descricao = descricao;
  }
}

// turma manager para manipulações no vetor de turmas: buscar, adicionar, excluir, imprimir.
class GerenciadorTurmas {
  turmas: Turma[];

  constructor() {
    this.turmas = [];
  }

  adicionarTurma(turma: Turma) {
    this.turmas.push(turma);
  }

  excluirTurma(id: number) {
    this.turmas = this.turmas.filter(turma => turma.id !== id);
  }

  buscarTurma(id: number) {
    return this.turmas.find(turma => turma.id === id);
  }

  imprimirTurmas() {
    this.turmas.forEach(turma => {
      let message: string = "";
      message += `ID: ${turma.id}\n`;
      message += `Descrição: ${turma.descricao}\n`;
      message += `Turno: ${turma.turno}\n`;
      message += `Curso: ${turma.curso.nome}\n`;
      message += `Área: ${turma.curso.area}\n`;
      message += '----------------------------------';
      console.log(message);
    });
  }
}

// Exemplo de uso
const gerenciador = new GerenciadorTurmas();

const turma1 = new Turma('Turma de Matemática', Turno.Manha, 'Matemática', Area.Exatas);
gerenciador.adicionarTurma(turma1);

const turma2 = new Turma('Turma de Biologia', Turno.Tarde, 'Biologia', Area.Biologicas);
gerenciador.adicionarTurma(turma2);

const turma3 = new Turma('Turma de História', Turno.Noite, 'História', Area.Humanas);
gerenciador.adicionarTurma(turma3);

gerenciador.imprimirTurmas();

// Tentativa de criar uma nova turma com descrição inválida (curta)
try {
  const turma4 = new Turma('Curta', Turno.Manha, 'Física', Area.Exatas);
  gerenciador.adicionarTurma(turma4);
} catch (error) {
  console.log('Erro:', error);
}

// Alterando a descrição de uma turma
turma1.setDescricao('Nova descrição da turma de Matemática');

gerenciador.imprimirTurmas();

// Tentativa de alterar a descrição de uma turma para uma descrição inválida
try {
  turma1.setDescricao('curtin');
  gerenciador.imprimirTurmas();
} catch (error) {
  console.log('Erro:', error);
}
