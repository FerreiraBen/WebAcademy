import { log } from 'console';
import { Request, Response } from 'express';
import { Departamentos } from '../models/Departamentos';
import { Funcionarios } from '../models/Funcionarios';


const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.render('main/about');
};

const ui = (req: Request, res: Response) => {
  res.render('main/ui');
};

const clearCookie = function (req: Request, res: Response) {
  res.clearCookie('logado');
  res.send('cookie apagado');
};

const createCookie = function (req: Request, res: Response) {
  if (!('nomeCookie' in req.cookies)) {
    res.cookie('nomeCookie', 'valorCookie');
    res.send('Você NUNCA passou por aqui!');
  } else {
    res.send('Você JÁ passou por aqui');
  }
};

const signup = async (req: Request, res: Response) => {
  const departamentos = (await Departamentos.findAll()).map(d => d.toJSON());
  if (req.route.methods.get) {
    res.render('main/signup', {
      csrf: req.csrfToken(),
      departamentos
    });
  } 
  else {
    const funcionario = req.body;
    try{
      await Funcionarios.create(funcionario);
      res.redirect('/');
    } catch(e: any) {
      res.render('main/signup', {
        csrf: req.csrfToken(),
        errors: e.errors,
        funcionario,
        departamentos
      });
    }
  }
};

const login = (req: Request, res: Response) => {
  if (req.route.methods.get) {
    res.render('main/login', {
      csrf: req.csrfToken(),
    });
  } else {
    console.log(req.body['user'], req.body['password']);

    // TEST CREDENTIALS HEREEEEEEEEEEEEEEE
    if (req.body['user'] == 'user' && req.body['password'] == '12345') {
      res.cookie('logado', true);
      res.redirect('/dept');
    }
    res.redirect('/login');
  }
};

const logout = (req: Request, res: Response) => {
  res.clearCookie('logado');
  res.render('main/ui');
};

export default {
  index,
  about,
  ui,
  createCookie,
  login,
  logout,
  clearCookie,
  signup,
};
