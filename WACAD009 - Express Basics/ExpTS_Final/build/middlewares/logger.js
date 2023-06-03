"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fs = __importStar(require("fs"));
const logPath = `${process.env.LOG_DIR}/access.log`;
function logger(tipo) {
    return (req, res, next) => {
        if (tipo === "completo") {
            console.log(`${new Date().toISOString} ${req.url} ${req.method} ${req.httpVersion} ${req.get("User-Agent")}`);
            fs.appendFile(logPath, `\n${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get("User-Agent")}`, function (err) {
                if (err)
                    console.log(err);
            });
        }
        else {
            console.log(`${new Date().toISOString} ${req.url} ${req.method}`);
            fs.appendFile(logPath, `${new Date().toISOString()} ${req.url} ${req.method}`, function (err) {
                console.log("A new text file was created successfully.");
            });
        }
        next();
    };
}
exports.default = logger;
