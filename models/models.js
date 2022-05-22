const path = require('path');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: `${path.dirname(path.basename(__dirname))}/database.sqlite`
});

class Citacao extends Model {};
class Artigo extends Model {};
class Autor extends Model {};
class Areas extends Model {};
class CODIFICACAO extends Model {};
class Download extends Model {};

Citacao.init({
    CITANTE : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CITADO: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
//        references: {
//            model: Artigo,
//            key: 'ID'
//        }
    }
}, {
        sequelize,
        modelName: 'Citacao'
});

Artigo.init({
    ID : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    NOME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AUTOR_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
//        references: {
//            model: Autor,
//            key: 'ID'
//        }
    },
    DATA_PUBLI: {
        type: DataTypes.DATEONLY,
    },
    LINK: {
        type: DataTypes.STRING,
    },
    DOWNLOADS: {
        type: DataTypes.INTEGER,
    }
}, {
        sequelize,
        modelName: 'Artigo'
});

Autor.init({
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    NOME: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        sequelize,
        modelName: 'Autor'
});

Areas.init({
    Artigo_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
//        references: {
//            model: Artigo,
//            key: 'ID'
//        }
    },
    AREA: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    }},
    {
        sequelize,
        modelName: 'Areas'
});

CODIFICACAO.init({
    Artigo_ID: {
        type: DataTypes.STRING,
        allowNull: false,
//        references: {
//            model: Artigo
//        }
    },
    CODIGO: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }},
    {
        sequelize,
        modelName: 'CODIFICACAO'
});


Download.init({
    ID: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    Artigo_ID: {
        type: DataTypes.STRING,
        allowNull: false
//        references: {
//            model: Artigo
//        }
    },
    DATA: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }},
    {
        sequelize,
        modelName: 'Download'
});

module.exports = sequelize;
