"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_1 = require("url");
const lorem_ipsum_1 = require("lorem-ipsum");
const router = (0, express_1.Router)();
const publicPath = `${process.cwd()}/public`;
router.get("/bemvindo/:nome", (req, res) => {
    res.send(`Bem vindo ${req.params.nome}`);
});
router.get("/lorem", (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});
router.get('/lorem/generate', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        const params = new url_1.URLSearchParams(body);
        const numParagraphs = parseInt(params.get('numParagraphs'));
        const loremText = (0, lorem_ipsum_1.loremIpsum)({
            count: numParagraphs,
            units: 'paragraphs',
            suffix: "<br><br>" // tornar nítido a quantidade de paragrafos (default: "\n")
        });
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(loremText);
        res.end(`<br><br><a href="/">VOLTAR</a><br>`);
    });
});
exports.default = router;
