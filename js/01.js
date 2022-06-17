let auto = {
    color: "rojo",
    marca: "fiat",
    modelo: "movi",
    anio: 2020,
    estado: "apagado",
    encender: () =>{
        if (estado = "apagado"){
            if(confirm("desea encender el auto?") == true){
                auto.estado = "encendido"
            }
        }
    },
    apagar: () =>{
        if (estado = "encendido"){
            if(confirm("desea apagar el auto") == true)
            auto.estado = "apagado"
        }
    }
}


console.log(auto);
auto.encender();
console.log(auto.estado)
auto.apagar();
console.log(auto.estado)

