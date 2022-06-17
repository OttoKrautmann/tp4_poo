class Rectangulo{
    constructor(base, altura){
        this.base = base,
        this.altura = altura
    }
    area(){
        console.log(`El area del rectangulo es ${base * altura}`)
    }
    perimetro(){
        console.log(`El perimetro del rectangulo es ${(2*base + 2*altura)}`)
    }
}


let base = prompt("ingrese la base del rectangulo")
let altura = prompt("ingrese la altura del rectangulo")
let rectangulo1 = new Rectangulo(base, altura)
rectangulo1.area()
rectangulo1.perimetro()