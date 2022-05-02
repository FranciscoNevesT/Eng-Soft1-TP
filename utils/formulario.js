async function getJson(path){
    const response = await fetch(path)
    const json = await response.json()

    return json
};

//Carregando os datasetsNecessarios
const artigosJson = getJson("../../data/artigos.json");
const autoresJson = getJson("../../data/autores.json");

//Update NOME e DATA
async function updateEstaticos(artigosJson){
    const id = parseInt(window.location.href.split("/").pop());

    var json = await artigosJson;
    var artKeys = Object.keys(json);

    var artSelect;
    for(var i = 0; i < artKeys.length; i++){
        if (json[artKeys[i]].ID == id){
            artSelect = json[artKeys[i]]
            break;
        }
    }

    document.getElementById("artName").value = artSelect.NOME;
    document.getElementById("artDate").value = artSelect.DATA_PUBLI;

    var options = document.getElementById("artAutor").options;
    for (var i = 0; i < options.length; i++){
        if(options[i].id == artSelect.AUTOR_ID){
            document.getElementById("artAutor").selectedIndex = i;
        }
    }
}

//UPDATE CITACOES
async function updateChecks(){
    const id = parseInt(window.location.href.split("/").pop());

    const citJson = await getJson("../../data/cit" + id + ".json");
    artKeys = Object.keys(citJson);

    for(var i = 0; i < artKeys.length; i++){
        var checkBox = document.getElementById("check" + citJson[artKeys[i]].CITADO);
        checkBox.checked = true;
    }
}

async function update(artigosJson){
    updateEstaticos(artigosJson);
    updateChecks();
};


function addCheckbox(id,label_t,name = "artigo"){
    var field = document.getElementById("field_art");
    var div = document.createElement("div");

    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = name;
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

async function artCheckboxCit(){
    const json = await artigosJson;
    const artKeys = Object.keys(json)

    var maxID = 0;

    var ids = [];

    for(var i = 0; i < json.length; i++){
        var art = json[artKeys[i]];

        var artID = art.ID;

        if(maxID < parseInt(artID)){
            maxID = parseInt(artID);
        }

        var nome = art.NOME;

        ids.push(artID);

        addCheckbox("check" + artID,nome);
    }

    return [ids,maxID]
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


const artSize = artCheckboxCit();



artSize.then( (out1) => {
    autorOpt().then((out) => {
        if (window.location.pathname.split("/").length == 4){
            update(artigosJson);
        }
    })
})

async function enviar(){
    var artName = document.getElementById("artName").value;
    var artDate = document.getElementById("artDate").value;
    var artAutor = document.getElementById("artAutor");

    var artAutorID = artAutor.options[artAutor.selectedIndex].id; 

    artSize.then((out) => {
        //Adicionando o artigo

        if(artName == ""){
            artName = "Vazio"
        }

        if(artDate == ""){
            artDate = "2001-09-17"
        }

        var urlOut = ""

        if(window.location.pathname.split("/").length == 4){
            urlOut += window.location.pathname.split("/").pop()
        }
        else{
            urlOut += (out[1] + 1)
        }
        
        urlOut += "_" + artName + "_" + artAutorID + "_" + artDate + "_" + "Placehold" + "_" + 0;
        //Adicionando as citações
        
        for(var i = 0; i < out[0].length;i++){


            var artCitado = document.getElementById("check" + out[0][i]);
    
            if(artCitado.checked == true){
                urlOut = urlOut + "@@@" + out[0][i]
            }
        }

        if(window.location.pathname.split("/").length == 4){
            window.location.assign("../../formulario/edit/save/" + urlOut);
        }
        else{   
            window.location.assign("../../formulario/add/" + urlOut);
        }

    })
    
}






