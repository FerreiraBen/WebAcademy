export interface MigracaoDB {
  consultas?: Array<{ model: string; query: string }>;
}

const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();

migracoes.set(1, {
  consultas: [
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios DROP fone;`,
    },
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios DROP idade;`,
    },
  ],
});

migracoes.set(2, {
  consultas: [
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios ADD senha CHAR(100) AFTER name;`,
    },
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios DROP endereco;`,
    },
  ],
});


migracoes.set(3, {
  consultas: [
    { model: 'Funcionarios',
    query: `DESCRIBE Funcionarios`,
  },
  ],
});


// migracoes.set(2, {
//   consultas: [
//     {
//       model: 'Dependentes',
//       query: `ALTER TABLE Dependentes ADD atributo_adicionado_2 VARCHAR(45) NOT NULL DEFAULT "";`,
//     },
//   ],
// });

export { migracoes };
