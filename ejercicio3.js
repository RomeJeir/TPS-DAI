//a

let palosNegros = 2;
let numerosPares = 5;

let multiplicarNegrosYPares = palosNegros * numerosPares;

console.log("Las cartas negras y pares son: " + multiplicarNegrosYPares);

//b
let palos = ["Picas","Diamantes","Corazones","Treboles"]
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let carta = {
    palo: "",
    numero: 0,
}
for(i = 0; i < numeros.length; i++){
    for(j = 0; j < palos.length; j++){
        console.log(numeros [i], palos [j])
    }
}
