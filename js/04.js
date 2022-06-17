class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo,
        this.nombre = nombre,
        this.precio = precio
    }
    imprimirDatos (){
        document.write(`<ul>
        <li>Codigo: ${this.codigo} </li>
        <li>Nombre: ${this.nombre} </li>
        <li>Precio: ${this.precio} </li>
        </ul>`)
    }
}

let producto1 = new Producto (101, "agua", 250);
let producto2 = new Producto (102, "cafe", 350);
let producto3 = new Producto (103, "mate", 300)

let lista = [producto1, producto2, producto3]

producto1.imprimirDatos()
producto2.imprimirDatos()
producto3.imprimirDatos()