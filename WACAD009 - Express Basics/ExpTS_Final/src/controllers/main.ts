import express, { Request, Response } from 'express';

const publicPath = `${process.cwd()}/public`;

const index = (req: Request, res: Response) => {
  res.send('Bem Vinde ao Web Academy!! ');
};

const bemvindo = (req: Request, res: Response) => {
  res.send(`Bem vindo ${req.params.nome}`);
};

const lorem = (req: Request, res: Response) => {
  res.sendFile(`${publicPath}/html/index.html`);
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
  });
};

const hb2 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 1234 },
    { nome: 'Horacio Fernandes', sala: 1235 },
    { nome: 'Edleno Moura', sala: 1238 },
    { nome: 'Elaine Harada', sala: 1239 },
  ];

  res.render('main/hb2', {
    profs,
  });
};

const hb3 = (req: Request, res: Response) => {
  res.render('main/hb3', {
    nome: 'Express',
    tipo: 'Framework',
    poweredByNode: true,
  });
};

const hb4 = (req: Request, res: Response) => {
  const profs = [
    { nome: 'Tayana Conte', sala: 1234 },
    { nome: 'Horacio Fernandes', sala: 1235 },
    { nome: 'Edleno Moura', sala: 1238 },
    { nome: 'Elaine Harada', sala: 1239 },
  ];

  res.render('main/hb4', {
    profs,
  });
};

const hb5 = (req: Request, res: Response) => {
  const techs = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];

  res.render('main/hb5', {
    techs,
  });
};

export default { bemvindo, lorem, hb1, hb2, hb3, hb4, hb5, index };
