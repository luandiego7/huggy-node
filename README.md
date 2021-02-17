# Abrir navegador em página específica

Sistema de Teste para abrir o navegador em uma determinada página

## Start project

Recomendações para execução do projeto:

- Dentro da pasta desejada, execute no terminal o comando `git clone https://github.com/luandiego7/huggy-node.git.
- Em seguida, dentro da pasta do projeto, execute no terminal `npm start` , para iniciar o sevidor express.
- Abra um programa da sua preferência que envie requisições, indico o postman, que foi utilizado para teste neste projeto.
- Envie uma requisição post para a url `http://localhost:3000/alert`.
- O projeto está setado para abrir o navegador utilizando child_process com spawn. Caso queira utilizar o puppeteer, execute no terminal `npm i puppeteer` para instalar o puppeteer.
- Abra a pasta `routes`, e no arquivo `index.js` comente as linhas 13 a 27, e descomente as linhas 29 a 43.
- Envie novamente a requisição post.

Requisitos para execução do projeto:

- NodeJs
