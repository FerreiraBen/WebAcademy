import { createServer } from 'http';
import { readFileSync } from 'fs';
import { URLSearchParams } from 'url';
import { loremIpsum } from 'lorem-ipsum';

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    try {
        const data = readFileSync("index.html", 'utf8');
        res.end(data);
    } catch (err) {
        console.error(err);
      }
    
  } else if (req.url === '/generate') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const params = new URLSearchParams(body);
      const numParagraphs = parseInt(params.get('numParagraphs'));

      const loremText = loremIpsum({
        count: numParagraphs,
        units: 'paragraphs',
        suffix: "<br><br>" // tornar nítido a quantidade de paragrafos (default: "\n")
      });

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(loremText);
      res.end(`<br><br><a href="/">VOLTAR</a><br>`);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`Gerador de Lorem Ipsum rodando na porta ${PORT}`);
});
