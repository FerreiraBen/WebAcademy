"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const logger_1 = __importDefault(require("./middlewares/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./router/router"));
dotenv_1.default.config();
(0, validateEnv_1.default)();
const app = (0, express_1.default)();
const publicPath = `${process.cwd()}/public`;
const PORT = process.env.PORT || 3333;
app.use((0, logger_1.default)("completo"));
app.use(router_1.default);
app.use("/css", express_1.default.static(`${publicPath}/css`));
app.use("/js", express_1.default.static(`${publicPath}/js`));
app.use((req, res, next) => {
    console.log("oie");
    next();
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
