let lampara = {
    descripcion: "Es una lámpara bastante pesada. Está cubierta de polvo: no parece que fuera usada en mucho tiempo.",
    nombre     : "lampara",
    esObtenible: false,
    estaOculto : false,
    verDescripcion() {
        return this.descripcion;
    },
    abrir(){
        return this.descripcion = "No puedo abrir la " + this.nombre;
    }
};

let llave = {
    descripcion: "Es una llave pequeña para abrir una puerta.",
    nombre     : "llave",
    esObtenible: true,
    estaOculto : true,
    verDescripcion() {
        return (this.estaOculto) ? this.descripcion = 'No veo ninguna ' + this.nombre : this.descripcion;
    },
    abrir(){
        return this.descripcion = "No puedo abrir la " + this.nombre;
    }
};

let escritorio = {
    descripcion: "Es un escritorio. Hay papeles esparcidos: no parece que haya escrito nada importante. Ves una caja",
    nombre     : "escritorio",
    esObtenible: false,
    estaOculto : false,
    verDescripcion() {
        return this.descripcion;
    },
    abrir(){
        return this.descripcion = "No hay nada de interes en el " + this.nombre;
    }
};

let caja = {
    descripcion: "Es una pequeña caja de plata con motivos florales. La cerradura está rota y puede abrirse.",
    nombre     : "caja",
    esObtenible: false,
    estaOculto : false,
    verDescripcion(){
        return this.descripcion;
    },
    abrir(){
           llave.estaOculto = false;
    return this.descripcion = "Hay una llave en el interior. Parece de una puerta";
    }
};

export {
    lampara,
    llave,
    escritorio,
    caja
};