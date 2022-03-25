
var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}]

function crearDesplegable(){

//1- Crea un select

var obj_select=document.createElement("select");
obj_select.id="opciones_conciertos";
//obj_select.onchange=cambiarConcierto;
obj_select.addEventListener("change",cambiarConcierto);

//2 - Con un bucle va creando objetos option

for(i=0; i<opciones_conciertos.length; i++){
    var obj_option=document.createElement("option");
    obj_option.innerText=opciones_conciertos[i].nombre;
    obj_option.value=opciones_conciertos[i].valor;
    //3 - dentro del bucle, va metiendo cada option como hijo del select
    obj_select.appendChild(obj_option);
}

//4 - Una vez recorridos todos los elementos del array,osea, fuera del bucle,pongo al select como hijo del div

document.getElementById("contededor_desplegable").appendChild(obj_select);

}

function cambiarConcierto(){

    var objeto_parrafo=document.createElement("p");
    objeto_parrafo.id="texto_precio";
    // 1- Tengo que saber que ha seleccionado el usuario
        // 1.1 - Mirando el value del select y haciendo un switch-case NO SE HACE
        // 1.2 - Miro el valor del select y recorro el array viendo si ese valor coincide con alguno de los elementos del select
        //Ejemplo: El usuario selecciona Iron 

    /*var concierto=document.getElementById("opciones_conciertos").value;
    for(i=0;i<opciones_conciertos.length;i++){
        if (concierto == opciones_conciertos[i].valor){
                var nombre=opciones_conciertos[i].nombre;
                var precio=opciones.concierto[i].precio;
                alert("EL concierto de " + nombre + "cuesta " + precio);
        }

    }*/

        //1.3 Uso de selectIndex

    var obj_select=document.getElementById("opciones_conciertos");
    var indice=obj_select.selectedIndex;
    //alert("Seleccionando el indice " + indice);
    var nombre=opciones_conciertos[indice].nombre;
    var precio=opciones_conciertos[indice].precio;
    var texto="El concierto de "+ nombre + " cuesta " + precio + " euro";
    //alert(texto);
    var objeto_parrafo=document.createElement("p");
    objeto_parrafo.id="texto_precio";
    objeto_parrafo.innerHTML=texto;
    document.getElementById("contenedor_precio").appendChild(objeto_parrafo);


}

