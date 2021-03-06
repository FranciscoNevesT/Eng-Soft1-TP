async function getJson(path){
    const response = await fetch(path)
    const json = await response.json()

    return json
};



//Carregando os datasetsNecessarios
const autoresJson = getJson("../../data/autores.json");
const artigosJson = getJson("../../data/artigos.json");
const vizuJson = getJson("../../data/vizu.json");

function addAutor(id,value){
    var select = document.getElementById("artAutor");

    var newAutor = document.createElement("option");
    newAutor.id = id
    newAutor.value  = value;
    newAutor.innerHTML = value;

    select.appendChild(newAutor);

}

async function autorOpt(){
    const json = await autoresJson
    
    const autorKeys = Object.keys(json)

    for(var i = 0; i < json.length; i++){
        var autor = json[autorKeys[i]];

        var autorID = autor.ID;
        var nome = autor.NOME;

        addAutor(autorID,nome);
    }

    return json.length
}

async function updateGraph(){
    var selectAutor = document.getElementById("artAutor").value;

    var elements = [];

    vizuJson.then((result) =>{

        console.log(selectAutor)

        for(var i = 0; i < result.length; i++){

            if(selectAutor == result[i].A_CITANTE || selectAutor == result[i].A_CITADO){

                var colored1 = false;
                var colored2 = false;

                if(selectAutor == result[i].A_CITANTE){
                    colored1 = true
                }
                if(selectAutor == result[i].A_CITADO){
                    colored2 = true
                }
                elements.push({data: {id: result[i].N_CITANTE,colored: colored1}});
                elements.push({data: {id: result[i].N_CITADO,colored: colored2}});
                elements.push({
                    data: {
                    id: ''+result[i].N_CITANTE+result[i].N_CITADO,
                    source: result[i].N_CITANTE,
                    target: result[i].N_CITADO
                    }
                })
            }
        }

        var style = [ // the stylesheet for the graph
            {
            selector: 'node',
            css: {
                "background-color": function(node) {
                    if (node.data("colored"))
                      return "#1E90FF";
                    else
                      return "#FF0000";
                  },
                'label': 'data(id)'
            }
            },
        
            {
            selector: 'edge',
            style: {
                'width': 3,
                'line-color': "#000",
                'target-arrow-color': '#000',
                'target-arrow-shape': 'triangle',
                'curve-style': 'bezier'
            }
            }
      ]

        var cy = cytoscape({
            container: document.getElementById('cy'),
            elements: elements,
            style: style}); 

        cy.layout({
            name: 'circle'
        }).run();

    })
}

function returnButton(){
    window.location.assign("/");
}


autorOpt().then(() =>{
    updateGraph();
});

const selectAutor = document.getElementById("artAutor");

selectAutor.addEventListener("change", (event) => {
    updateGraph();
});
