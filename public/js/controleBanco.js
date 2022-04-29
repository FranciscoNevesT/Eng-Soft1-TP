const { json } = require("express/lib/response");
const res = require("express/lib/response");
var fs = require('fs');

function save_json(json,path){
    fs.writeFile(path, json, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

//Dado o id de um artigo, retorna todos os artigos que ele cita
async function getCitacao(sequelize,id){
    var query = "Select Artigo_ID,Citacao_ID,Ar.NOME,AU.ID,AU.NOME as Autor From Citacaos as C, Artigos as Ar, Autors as Au Where Artigo_ID = " + id + " AND Citacao_ID = AR.ID AND AUTOR_ID = Au.ID";
    
    const [results, metadata] = await sequelize.query(query);

    return results
}

//Retorna todos os artigos do dataset
async function getArtigos(sequelize, path = ""){
    var query = "Select * From Artigos"

    const [results, metadata] = await sequelize.query(query);

    if(path != ""){
        save_json(JSON.stringify(results),path);
    }

    return results
}

//Retorna todos os autores do dataset
async function getAutores(sequelize, path = ""){
    var query = "Select * From Autors"

    const [results, metadata] = await sequelize.query(query);

    if(path != ""){
        save_json(JSON.stringify(results),path);
    }

    return results
}

async function executeQuerry(sequelize, query){
    await sequelize.query(query);

}

module.exports = {getCitacao,getArtigos,getAutores,executeQuerry};