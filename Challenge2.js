let Numero = 7

function EsParArrow(num) {
    if (num % 2 === 0) { return "Es par"; }
    else { return "Es impar"; }
}

const EsPar = function (Num) {
    if (Num % 2 === 0){return "Es par"}
    else{return "Es impar"}
}

console.log ("Numero:" + Numero)
console.log("Funcion Arrow:" + EsParArrow(Numero))
console.log("Funcion Normal:" + EsPar(Numero))