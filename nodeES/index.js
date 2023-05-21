import http  from "http";
import fs from "fs";

import dotenv from "dotenv";
dotenv.config();


function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}



const PORT = process.env.PORT || 3333;
const folder = process.argv[2];

const server = http.createServer((req,res) => {

    fs.readdir(folder, (err,files)=>{
        if(err)console.log(err);
        if(req.url === '/'){
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            files.forEach(f => res.write(createLink(f)));
            res.end();
        }else if(req.url === '/favicon.ico'){
            // ignore favicon.ico
        }
        else{
            try {
                const data = fs.readFileSync(folder+req.url, 'utf8');
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                res.write(`<a href="/">VOLTAR</a><br>\n`);
                res.write(`<p >${data}</p>\n`)
                res.end();
              } catch (err) {
                console.error(err);
              }
        }
    });
    
});

server.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`);
});