const sequelize = require(`${__dirname}/models`);

sequelize.models.Citacao.sync();
sequelize.models.Artigo.sync();
sequelize.models.Autor.sync();
sequelize.models.Areas.sync();
sequelize.models.CODIFICACAO.sync();

sequelize.models.Autor.create({
    ID: 1,
    NOME: 'Kobayashi'
});
sequelize.models.Autor.create({
    ID: 2,
    NOME: 'Tohru'
});

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

sequelize.models.Citacao.create({
    Citacao_ID: 2,
    Artigo_ID: 1
});

