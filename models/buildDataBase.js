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

    sequelize.models.Autor.create({
        ID: 6,
        NOME: 'Kira'
    });

    sequelize.models.Autor.create({
        ID: 7,
        NOME: 'L'
    });
    
    //Definindo os artigos   
    sequelize.models.Artigo.create({
        ID: 1,
        NOME: 'The Essential Guide to Maid Dressing',
        AUTOR_ID: 1,
        DOWNLOADS: 1, // Naturalmente, Tohru baixou para ler.
        DATA_PUBLI: '2000-01-01'
    });
    
    sequelize.models.Artigo.create({
        ID: 2,
        NOME: 'Proof that Kobayashi-san is the the best at everything',
        AUTOR_ID: 2,
        DOWNLOADS: 0,
        DATA_PUBLI: "2001-05-17"
    });

    sequelize.models.Artigo.create({
        ID: 3,
        NOME: 'Complete guide to make your enemies yours best friends',
        AUTOR_ID: 3,
        DOWNLOADS: 3,
        DATA_PUBLI: "2005-07-23"
    });

    sequelize.models.Artigo.create({
        ID: 4,
        NOME: 'Multiples ways to kill your brother',
        AUTOR_ID: 4,
        DOWNLOADS: 5,
        DATA_PUBLI: "2003-11-07"
    });

    sequelize.models.Artigo.create({
        ID: 5,
        NOME: 'Guide to almost kill your friends and get they back',
        AUTOR_ID: 4,
        DOWNLOADS: 40,
        DATA_PUBLI: "2005-08-07"
    });

    sequelize.models.Artigo.create({
        ID: 6,
        NOME: 'Reasons why i will be the king of the pirates',
        AUTOR_ID: 5,
        DOWNLOADS: 10,
        DATA_PUBLI: "2003-05-06"
    });

    sequelize.models.Artigo.create({
        ID: 7,
        NOME: 'Complete guide to recrute your crew',
        AUTOR_ID: 5,
        DOWNLOADS: 100,
        DATA_PUBLI: "2003-12-06"
    });

    sequelize.models.Artigo.create({
        ID: 8,
        NOME: 'How I will become the god of new world',
        AUTOR_ID: 6,
        DOWNLOADS: 0,
        DATA_PUBLI: "2010-05-17"
    });

    sequelize.models.Artigo.create({
        ID: 9,
        NOME: 'A essay about the justice',
        AUTOR_ID: 6,
        DOWNLOADS: 0,
        DATA_PUBLI: "2010-03-17"
    });

    sequelize.models.Artigo.create({
        ID: 10,
        NOME: 'A measure response for the "A essay about the justice"',
        AUTOR_ID: 7,
        DOWNLOADS: 0,
        DATA_PUBLI: "2010-04-04"
    });

    sequelize.models.Artigo.create({
        ID: 11,
        NOME: 'A holistic approach for the inefficiency of the letter L in the modern latin languages',
        AUTOR_ID: 6,
        DOWNLOADS: 0,
        DATA_PUBLI: "2010-06-09"
    });

    sequelize.models.Artigo.create({
        ID: 12,
        NOME: 'The science behind the loyalty',
        AUTOR_ID: 6,
        DOWNLOADS: 0,
        DATA_PUBLI: "2010-05-09"
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

    sequelize.models.Citacao.create({
        CITANTE: 8,
        CITADO: 1
    });
    
    sequelize.models.Citacao.create({
        CITANTE: 8,
        CITADO: 6
    });
    sequelize.models.Citacao.create({
        CITANTE: 9,
        CITADO: 8
    });
    
    sequelize.models.Citacao.create({
        CITANTE: 10,
        CITADO: 9
    });

    sequelize.models.Citacao.create({
        CITANTE: 10,
        CITADO: 8
    });

    sequelize.models.Citacao.create({
        CITANTE: 10,
        CITADO: 5
    });

    sequelize.models.Citacao.create({
        CITANTE: 11,
        CITADO: 10
    });

    sequelize.models.Citacao.create({
        CITANTE: 12,
        CITADO: 2
    });

    sequelize.models.Citacao.create({
        CITANTE: 12,
        CITADO: 3
    });

    sequelize.models.Citacao.create({
        CITANTE: 12,
        CITADO: 5
    });

    sequelize.models.Citacao.create({
        CITANTE: 12,
        CITADO: 7
    });



    //Definindo os downloads
    var c = 0
    for(var i=0; i<7; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-01-17'
        });
        c+=1
    }

    for(var i=0; i<12; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-02-17'
        });
        c+=1
    }

    for(var i=0; i<4; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-03-17'
        });
        c+=1
    }

    for(var i=0; i<17; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-04-17'
        });
        c+=1
    }
    
    for(var i=0; i<34; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-05-17'
        });
        c+=1
    }

    for(var i=0; i<8; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-06-17'
        });
        c+=1
    }

    for(var i=0; i<3; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-07-17'
        });
        c+=1
    }

    for(var i=0; i<5; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-08-17'
        });
        c+=1
    }

    for(var i=0; i<10; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-09-17'
        });
        c+=1
    }

    for(var i=0; i<2; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-10-17'
        });
        c+=1
    }

    for(var i=0; i<23; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-11-17'
        });
        c+=1
    }

    for(var i=0; i<1; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 7,
            DATA: '2022-12-17'
        });
        c+=1
    }

    sequelize.models.Download.create({
        ID:c,
        Artigo_ID: 1,
        DATA: '2005-12-17'
    });
    c+=1

    for(var i=0; i<3; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 3,
            DATA: '2006-05-17'
        });
        c+=1
    }

    for(var i=0; i<5; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 4,
            DATA: '2009-05-17'
        });
        c+=1
    }

    for(var i=0; i<20; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 5,
            DATA: '2011-05-17'
        });
        c+=1
    }

    for(var i=0; i<20; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 5,
            DATA: '2011-03-17'
        });
        c+=1
    }
    
    for(var i=0; i<10; i++){
        sequelize.models.Download.create({
            ID:c,
            Artigo_ID: 6,
            DATA: '2011-03-17'
        });
        c+=1
    }

}

build()



