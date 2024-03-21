// moviesAPI.js
const express = require('express');
const app = express();

const filmes = [
  { id: 1, titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino' },
  { id: 2, titulo: 'Matrix', diretor: 'Lana Wachowski, Lilly Wachowski' },
  { id: 3, titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola' }
];

app.get('/filmes', (req, res) => {
  res.json(filmes);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API de filmes está rodando em http://localhost:${port}`);
});
