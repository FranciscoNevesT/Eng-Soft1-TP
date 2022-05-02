
//Configurações do banco de dados
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});
const models = require(`${__dirname}/models`)(sequelize)

models.Citacao.sync();
models.Artigo.sync();
