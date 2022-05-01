//Criando os elemntos


function addCheckbox(id,value,label_t,name = "artigo"){
    var field = document.getElementById("field_art");
    var div = document.createElement("div");

    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;
    checkbox.id = id;

    var label = document.createElement('label');

    label.htmlFor = id;
    label.id = "label_check_" + id;

    label.appendChild(document.createTextNode(label_t));

    div.appendChild(checkbox);
    div.appendChild(label);

    field.appendChild(div);
}

function addAutor(id,value){

    var select = document.getElementById("artAutor");

    var newAutor = document.createElement("option");
    newAutor.id = id
    newAutor.value  = value;
    newAutor.innerHTML = value;

    select.appendChild(newAutor);

}

function removeCheckbox(id){
    const checkbox = document.getElementById(id);

    checkbox.remove();

    
    const label = document.getElementById("a");

    label.remove()
}

async function getJson(path){
    const response = await fetch(path)
    const json = await response.json()

    return json
}



async function artCheckbox(){
    const json = await getJson("./data/artigos.json")
    const artKeys = Object.keys(json)

    var maxID = 0;

    for(var i = 0; i < json.length; i++){
        var art = json[artKeys[i]];

        var artID = art.ID;

        if(maxID < parseInt(artID)){
            maxID = parseInt(artID);
        }

        var nome = art.NOME;

        addCheckbox("check" + i,artID,nome);
    }

    console.log(maxID)

    return [json.length,maxID]
}


async function autorOpt(){
    const json = await getJson("./data/autores.json")
    
    const autorKeys = Object.keys(json)

    for(var i = 0; i < json.length; i++){
        var autor = json[autorKeys[i]];

        var autorID = autor.ID;
        var nome = autor.NOME;

        addAutor(autorID,nome);
    }

    return json.length
}

autorOpt()

const artSize = artCheckbox();


function enviar(){
    var artName = document.getElementById("artName").value;
    var artDate = document.getElementById("artDate").value;
    var artAutor = document.getElementById("artAutor");

    var artAutorID = artAutor.options[artAutor.selectedIndex].id; 

    artSize.then((out) => {
        var querys = []

        //Adicionando o artigo

        if(artName == ""){
            artName = "Vazio"
        }

        if(artDate == ""){
            artDate = "2001-09-17"
        }
        
        var urlOut = "" + (out[1] + 1) + "_" + artName + "_" + artAutorID + "_" + artDate + "_" + "Placehold" + "_" + 0;
        //Adicionando as citações
        
        for(var i = 0; i < out[0];i++){
            var artCitado = document.getElementById("check" + i);
    
            if(artCitado.checked == true){
                urlOut = urlOut + "@@@" + artCitado.value
            }
        }
        window.location.assign("./formulario/edit/" + urlOut);

    })
    
}