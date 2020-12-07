const port = 3004;

const bodyParser = require("body-parser");
const express = require("express");
const server = express(); // novo servidor
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true })); // para toda requisicao este middleware sera chamado
server.use(bodyParser.json()); // para toda requisicao este middleware sera chamado
server.use(allowCors);
server.use(queryParser()); // para usar skip e limit na paginacao

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`);
});

module.exports = server; // exporta server para enviar dps o server para routes
