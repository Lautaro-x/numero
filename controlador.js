
window.onload = cargarselect();

function cargarselect(){

    ///Aca cargamos los elementos desde la base de datos...
    var elementos = ["10%", "20%", "30%", "40%", "50%", "60%", "70%"];

    var select_elementos = document.getElementById("selector");
    
    elementos.forEach( function( nombre, indice )
    {
        opcion = document.createElement("option");
        opcion.text = nombre;
        select_elementos.add(opcion);
    });
}

$(document).ready(function(){
	$("#btn").click(
        function(){
            // Aca ponemos el numero que queremos.
            var entero = parseInt(Math.random()*999999);
            $("#label_1").css('color', 'white');
            $("#texto").text(entero);
        }
    );
});