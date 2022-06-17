class Persona{
    constructor(nombre, sexo, peso, altura, añoDeNacimiento){
        this.nombre = nombre,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.añoDeNacimiento = añoDeNacimiento,
        this.dni = "no tiene asignado DNI"
    }
    mostrarGeneracion (){
        if (this.añoDeNacimiento <= 1948 & this.añoDeNacimiento >=1930){
            document.write(`${this.nombre} pertenece a la Silent Generation y su rasgo caracteristico es la Austeridad <br>`)
        }else if (this.añoDeNacimiento <= 1968 & this.añoDeNacimiento >=1949){
            document.write(`${this.nombre} pertenece a la Generacion Baby Boom y su rasgo caracteristico es la Ambicion <br>`)
        }else if (this.añoDeNacimiento <= 1980 & this.añoDeNacimiento >=1969){
            document.write(`${this.nombre} pertenece a la Generacion X y su rasgo caracteristico es la Obsesion por el exito <br>`)
        }else if (this.añoDeNacimiento <= 1993 & this.añoDeNacimiento >=1981){
            document.write(`${this.nombre} pertenece a la Generacion Y y su rasgo caracteristico es la Frustracion <br>`)
        }else if (this.añoDeNacimiento <= 2010 & this.añoDeNacimiento >=1994){
            document.write(`${this.nombre} pertenece a la Generacion Z y su rasgo caracteristico es la Irreverencia <br>`)
        }else {
            document.write(`${this.nombre} no pertenece a ninguna generacion`)
        }
    }
    esMayorDeEdad (){
        if ( 2022 - this.añoDeNacimiento >=18){
            document.write(`${this.nombre} es mayor de edad <br>`)
        }else{
            document.write(`${this.nombre} no es mayor de edad <br>`)
        }
    }
    generarDni(newDni){
        newDni = Math.floor((Math.random()*50000000)+1)
        this.dni = newDni
    }
    mostrarDatos(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Sexo: ${this.sexo} </li>
        <li>peso: ${this.peso} </li>
        <li>Altura: ${this.altura} </li>
        <li>Año de nacimiento: ${this.añoDeNacimiento} </li>
        <li>Edad: ${2022 - this.añoDeNacimiento} </li>
        <li>DNI: ${this.dni} </li>
        </ul>`)
    }   
}

let persona1 = new Persona ("otto", "h", 86, 185, 1997)
persona1.mostrarGeneracion()
persona1.esMayorDeEdad()
persona1.mostrarDatos()
persona1.generarDni()
persona1.mostrarDatos()