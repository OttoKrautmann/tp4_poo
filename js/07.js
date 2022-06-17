let agendaReal = [];
let agenda = {
  agendaLlena() {
    if (agendaReal.length < 10) {
      console.log("la agenda no esta llena");
    } else if ((agendaReal.length = 10)) {
      console.log("la agenda esta llena");
    }
  },
  listarContactos() {
    for (let i = 0; i <= agendaReal.length - 1; i++) {
      document.write(`${agendaReal[i]} <br> `);
    }
  },
  huecosLibres (){
    if (agendaReal.length < 10){
      console.log(`la agenda tiene ${10- agendaReal.length} espacios disponibles`)
    } else {
      console.log(`la agenda no tiene espacios disponibles`)
    }
  }
};

class Contacto {
  constructor(nombreContacto, telefono) {
    (this.nombreContacto = nombreContacto), (this.telefono = telefono);
  }
  agendarContacto() {
    let existeContacto = false;
    console.log(agendaReal[0[0]])
    for (let i = 0; i <= agendaReal.length; i++) {
      console.log(agendaReal);
      existeContacto = false
      if (agendaReal[i[0]] == this.nombreContacto) {
        console.log(existeContacto);
        existeContacto = true;
        console.log(existeContacto);
        console.log(agendaReal);
        
      }
    }
    if (existeContacto == true) {
      console.log("Ya existe el contacto");
    } else if (agendaReal.length < 10) {
      agendaReal.push([this.nombreContacto, this.telefono]);
    } else {
      console.log(`No se pudo agregar el contacto. La agenda está llena`);
    }
  }
}

let contacto1 = new Contacto("contacto1", 1);
let contacto2 = new Contacto("contacto2", 2);
let contacto3 = new Contacto("contacto3", 3);
let contacto4 = new Contacto("contacto4", 4);
let contacto5 = new Contacto("contacto5", 5);
let contacto6 = new Contacto("contacto6", 6);
let contacto7 = new Contacto("contacto7", 7);
let contacto8 = new Contacto("contacto8", 8);
let contacto9 = new Contacto("contacto9", 9);
// let contacto10 = new Contacto("contacto10", 10)
// let contacto11 = new Contacto("contacto11", 11)
