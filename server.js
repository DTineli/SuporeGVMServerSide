const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use('/chamado', require('./app/router/chamadosRouter'));

const server = app.listen(3000);
const io = require('./socket').init(server);
