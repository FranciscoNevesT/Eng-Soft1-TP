const sequelize = require(`${__dirname}/models`);

async function build(){
    await sequelize.models.Citacao.sync();
    await sequelize.models.Artigo.sync();
    await sequelize.models.Autor.sync();
    await sequelize.models.Areas.sync();
    await sequelize.models.CODIFICACAO.sync();
    await sequelize.models.Download.sync();

    //Definindo os autores    
    sequelize.models.Autor.create({
        ID: 1,
        NOME: 'Kobayashi'
    });

    sequelize.models.Autor.create({
        ID: 2,
        NOME: 'Tohru'
    });

    sequelize.models.Autor.create({
        ID: 3,
        NOME: 'Naruto'
    });

    sequelize.models.Autor.create({
        ID: 4,
        NOME: 'Sasuke'
    });
    
    sequelize.models.Autor.create({
        ID: 5,
        NOME: 'Luffy'
    });

    
    
    //Definindo os artigos   
    sequelize.models.Artigo.create({
        ID: 1,
        NOME: 'The Essential Guide to Maid Dressing',
        AUTOR_ID: 1,
        DOWNLOADS: 1 // Naturalmente, Tohru baixou para ler.
    });
    
    sequelize.models.Artigo.create({
        ID: 2,
        NOME: 'Proof that Kobayashi-san is the the best at everything',
        AUTOR_ID: 2,
        DOWNLOADS: 0
    });

    sequelize.models.Artigo.create({
        ID: 3,
        NOME: 'Complete guide to make your enemies yours best friends',
        AUTOR_ID: 3,
        DOWNLOADS: 3
    });

    sequelize.models.Artigo.create({
        ID: 4,
        NOME: 'Multiples ways to kill your brother',
        AUTOR_ID: 4,
        DOWNLOADS: 5
    });

    sequelize.models.Artigo.create({
        ID: 5,
        NOME: 'Guide to almost kill your friends and get they back',
        AUTOR_ID: 4,
        DOWNLOADS: 40
    });

    sequelize.models.Artigo.create({
        ID: 6,
        NOME: 'Reasons why i will be the king of the pirates',
        AUTOR_ID: 5,
        DOWNLOADS: 10
    });

    sequelize.models.Artigo.create({
        ID: 7,
        NOME: 'Complete guide to recrute your crew',
        AUTOR_ID: 5,
        DOWNLOADS: 100
    });
    

    //Definindo as citações
    sequelize.models.Citacao.create({
        CITANTE: 2,
        CITADO: 1
    });

    sequelize.models.Citacao.create({
        CITANTE: 5,
        CITADO: 3
    });

    sequelize.models.Citacao.create({
        CITANTE: 7,
        CITADO: 3
    });

    sequelize.models.Citacao.create({
        CITANTE: 7,
        CITADO: 6
    });
}

build()



