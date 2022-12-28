class Persona {
    constructor(cedula, nombre, apellido) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get Cedula() {
        return this.cedula;
    }
    set Cedula(cedula) {
        this.cedula = cedula;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }

    get Apellido() {
        return this.apellido;
    }
    set Apellido(apellido) {
        this.apellido = apellido;
    }
}
