var index = {
    descripcion: "<p>Tus ojos no se han acostumbrado a ver en la oscuridad pero aún puedes ver siluetas de los muebles que te rodean. Te levantas con cierto problema e intentas caminar hacia un espacio abierto. Sin embargo, descubres que tienes una gruesa cadena en tu tobillo izquierdo, limitando tu libertad de movimientos. </p><p>A tu alrededor ves la silueta de una lámpara de mano y un escritorio.",
    salidas    : {
        norte: habitacionNorte
    },
    salidaNorte(){
        return this.salidas.norte;
    },
    verDescripcion() {
        return this.descripcion;
    }
};

var habitacionNorte = {
    descripcion : "Esto es el fin del juego",
    desbloqueado: false,                        //¿Es accesible desde el comienzo de la partida?
    salidas     : {
        sur: index
    },
    salidaSur(){
        return this.salidas.sur;
    },
    verDescripcion(){
        return this.descripcion;
    }
};

export { index, habitacionNorte };