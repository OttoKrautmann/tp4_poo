class Libro {
    constructor (isbn, titulo, autor, numPaginas){
        this.isbn = isbn,
        this.titulo = titulo,
        this.autor = autor,
        this.numPaginas = numPaginas
    }
    get mostarIsbn (){
        return this.isbn
    }
    get mostarTitulo (){
        return this.titulo
    }
    get mostarAutor (){
        return this.autor
    }
    get mostarNumPaginas (){
        return this.numPaginas
    }
    mostarLibro (){
        document.write(`El libro ${this.mostarTitulo} con ISBN ${this.mostarIsbn} por el autor ${this.mostarAutor} tiene ${this.mostarNumPaginas} paginas <br>`)
    }
}

let libro1 = new Libro (1234, "hola", "otto", 123)
let libro2 = new Libro (1111, "chau", "otto", 150)

libro1.mostarLibro()
libro2.mostarLibro()

let arrayLibro1 = Object.values(libro1)
let arrayLibro2 = Object.values(libro2)

if(arrayLibro1[3]>arrayLibro2[3]){
    document.write(`El libro ${libro1.mostarTitulo} tiene mas paginas<br>`)
}else if(arrayLibro1[3]<arrayLibro2[3]){
    document.write(`El libro ${libro2.mostarTitulo} tiene mas paginas<br>`)
}else{
    document.write(`Ambos libros tienen la misma cantidad de paginas<br>`)
}
