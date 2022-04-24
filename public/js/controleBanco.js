async function getCitacao(sequelize,id){
    var query = "Select Artigo_ID,Citacao_ID,Ar.NOME,AU.ID,AU.NOME as Autor From Citacaos as C, Artigos as Ar, Autors as Au Where Artigo_ID = " + id + " AND Citacao_ID = AR.ID AND AUTOR_ID = Au.ID";
    
    const [results, metadata] = await sequelize.query(query);

    console.log(results)

    return getCitacao
}

module.exports = {getCitacao};