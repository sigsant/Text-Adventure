import { lampara, llave, escritorio, caja} from './objetos.js';
import { index, habitacionNorte } from './habitaciones.js';

document.querySelector("button").onclick    = introducirOrden;
                       document.body.onload = comienzo;

function comienzo(){
    let areaTexto = document.querySelector("#texto");

    areaTexto.innerHTML = index.descripcion;
    introducirOrden();
}

function introducirOrden(){
    let orden = document.querySelector("input").value;
    
        verDatos(orden, "none", "red");
        usoObjetos(orden, lampara);
        usoObjetos(orden, llave);
        usoObjetos(orden, escritorio);
        usoObjetos(orden, caja);
}

function verDatos(detalles, estilo, color){
    let parrafo                  = document.createElement('p');
        parrafo.textContent      = detalles;
        parrafo.style.fontStyle  = estilo;
        parrafo.style.fontWeight = "bold";
        parrafo.style.color      = color;

        document.querySelector('#texto').appendChild(parrafo); 
}

/**
 * ? ¿Se puede simplificar con varios condicionales ternarios?
 */

function usoObjetos(orden, objeto){
    if (orden == "mirar " + objeto.nombre || orden == "ver " + objeto.nombre){
        verDatos(objeto.verDescripcion(), "italic", "green");
    } else if (orden == "tomar " + objeto.nombre){
        if(objeto.esObtenible){
            verDatos('Has conseguido una ' + objeto.nombre + '. Te será útil para escapar de aquí', "italic", "blue");
        } else {
        verDatos("No puedo tomarlo", "italic", "grey");
        }
    } else if (orden == "abrir " + objeto.nombre){
        verDatos(objeto.abrir(), "italic", "purple");
    }
}