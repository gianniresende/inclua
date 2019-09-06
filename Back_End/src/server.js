const express = require('express');
const routes = require('./routes/routes');
const startBD = require('./config/BD/mongo');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);