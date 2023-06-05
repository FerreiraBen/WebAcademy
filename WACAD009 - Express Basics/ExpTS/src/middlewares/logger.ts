import { Request, Response, NextFunction } from 'express';
import { Tipo } from './loggerTypes';
import dotenv from 'dotenv';
dotenv.config();

import * as fs from 'fs';

const logPath = `${process.env.LOG_DIR}/access.log`;

function logger(tipo: Tipo) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (tipo === 'completo') {
      fs.appendFile(
        logPath,
        `\n${new Date().toISOString()} ${req.url} ${req.method} ${
          req.httpVersion
        } ${req.get('User-Agent')}`,
        function (err) {
          if (err) console.log(err);
        },
      );
    } else {
      fs.appendFile(
        logPath,
        `${new Date().toISOString()} ${req.url} ${req.method}`,
        function (err) {
          console.log('A new text file was created successfully.');
        },
      );
    }

    next();
  };
}

export default logger;
