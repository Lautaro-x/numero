
window.onload = cargarselect();

function cargarselect(){

    ///Aca cargamos los elementos desde la base de datos...
    var elementos = ["elemento 1", "elemento 2", "elemento 3", "elemento 4..."];

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
            $("#label_1").text("Su número es: ");
            $("#label_1").attr('style','color: white');
            $("#texto").text(entero);
        }
    );
});