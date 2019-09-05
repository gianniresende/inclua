const mongoose = require('mongoose');

const stringConexao = 'mongodb+srv://ArthurMasson:arthur98@clusterdesafio-vhdmb.mongodb.net/DesafioIoasys?retryWrites=true&w=majority';

module.exports = mongoose.connect(stringConexao, {useNewUrlParser: true});