import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import logger from './middlewares/logger';
import dotenv from 'dotenv';
import router from './router/router';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

// DOTENV
dotenv.config();

// ENVALID
validateEnv();

// EXPRESS
const app = express();

// DIRs and PORT
const publicPath = `${process.cwd()}/public`;
const PORT = process.env.PORT || 3333;

// HANDLEBARS
app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

// SASS
app.use(
  sass({
    src: `${publicPath}/scss`,
    dest: `${publicPath}/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

// LOGs
app.use(logger('completo'));

// ROUTER
app.use(router);

// ASSETS w/ express.static
app.use('/css', express.static(`${publicPath}/css`));

app.use('/js', [
  express.static(`${publicPath}/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js`)
]);

app.use('/img', express.static(`${publicPath}/img`));

app.use('/webfonts',
  express.static(
    `${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`,
  ),
);



app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
