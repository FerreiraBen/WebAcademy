import express, { Request, Response } from 'express';
import validateEnv from './utils/validateEnv';
import logger from './middlewares/logger';
import dotenv from 'dotenv';
import router from './router/router';
import { engine } from 'express-handlebars';

dotenv.config();
validateEnv();

const app = express();

const publicPath = `${process.cwd()}/public`;
const PORT = process.env.PORT || 3333;

app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  }),
);
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);
app.use(logger('completo'));
app.use(router);

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
app.use('/img', express.static(`${publicPath}/img`));

// app.use((req, res, next) => {
//   console.log('oie');
//   next();
// });

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
