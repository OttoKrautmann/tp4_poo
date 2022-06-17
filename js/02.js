let cuenta = {
    titular: "alex",
    saldo: 0,
    saldoAIngresar: 0,
    saldoAExtraer: 0,
    ingresar: () =>{
        if(confirm("desea ingresar dinero?") == true){
            cuenta.saldoAIngresar = prompt("Cuanto dinero desea ingresar?")
        }
        cuenta.saldo = cuenta.saldo + cuenta.saldoAIngresar
        console.log(`usted posee $ ${cuenta.saldo} disponibles`)
    },
    extraer: () =>{
        if(confirm("desea extraer dinero?") == true){
            do {
                console.log(`usted posee $ ${cuenta.saldo} disponibles para extraer`)
                cuenta.saldoAExtraer = prompt("cuanto dinero desea extraer?")
            }while(
                cuenta.saldoAExtraer > cuenta.saldoAIngresar
                )
        }
        cuenta.saldo = cuenta.saldo - cuenta.saldoAExtraer
        console.log(cuenta.saldo)
    },
    informar: () =>{
        console.log(`usted posee $ ${cuenta.saldo} disponibles`)
    }
}

console.log(`${cuenta.titular} posee $ ${cuenta.saldo}`)
cuenta.ingresar()
console.log(`usted posee $ ${cuenta.saldo} disponibles`)
cuenta.extraer()
console.log(`usted posee $ ${cuenta.saldo} disponibles`)
