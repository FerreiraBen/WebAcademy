import { cleanEnv, port, str, num } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    NODE_ENV: str(),
    BCRYPT_ROUNDS: num(),
  });
}

export default validateEnv;
