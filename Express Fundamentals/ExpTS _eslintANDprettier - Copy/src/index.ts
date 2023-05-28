import express, { Request, Response } from "express";
import validateEnv from "./utils/validateEnv";
import morgan from 'morgan';
import dotenv from "dotenv";
dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(morgan('combined'));

app.get("/", (req: Request, res: Response) => {
	res.send("Hello world!");
});

app.listen(PORT, () => {
	console.log(`Express app iniciada na porta ${PORT}.`);
});
