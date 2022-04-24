function enviar(){
    var artName = document.getElementById("artName").value;
    var artDate = document.getElementById("artDate").value;

    var citados = [];

    for(var i = 1; i < 3;i++){
        var artCitado = document.getElementById("check" + i);
        if(artCitado.checked == true){
            citados.push(artCitado.value);
        }
    }

    //window.location.assign(".");
    
}