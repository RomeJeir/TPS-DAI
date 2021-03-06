const express = require("express");
const app = express();
const PORT = 3000;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.use(express.json());
	
app.post("/",(req, res) => {
	console.log(req.body)
	// res.end();
    res.send(process_data(req.body));
})

app.listen(PORT,(err) => {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
})


let num_max = 25
let cant_cartones = numero_aleatorio(num_max);
let bingo_max = 25;
function bin_rand(){
    let nums_bingo = Math.random(1,100);
    return nums_bingo
}


function obtener_carton(nom_jug){
    let cart = iniciar_juego();
    for(g = 0;g<cant_cartones;g++)
    {
        let num_bingo;
        for(i=0;i<bingo_max;i++)
        {
            num_bingo = bin_rand()
        }
        cart[g].nums_bingo.push(num_bingo)
    }
}

function iniciar_juego(){
    let cartones = [];
    for(i = 0;i<cant_cartones;i++){
        let carton = {
            id: "id" + i,
            nums_bingo: []
        }
        cartones.push(carton);
    }
    return cartones;
}

function numero_aleatorio()
{
    let num_ran = Math.random(1,num_max);
    return num_ran;
}


app.post("/numero_aleatorio", (req,res) => {
    rando_num = numero_aleatorio()
    res.send(rando_num)
})

app.post("/iniciar_juego", (req,res) => {
    start = iniciar_juego()
    res.send(start)
})

app.get("/obtener_carton", (req,res) => {
    obt_cart = obtener_carton(nom_jug)
    res.send(obt_cart)
})

app.get("/cartones/:nom_jug?", (req,res) => {
    if(nom_jug == ""){
        res.send(cartones)
    }
    else{
        res.send(obt_cart)
    }
})

app.get("/sacar_numero", (req,res) => {
    num_bing_rand = bin_rand();
    for(let i = 0;i<bingo_max;i++){
        if(cartones[i].nums_bingo == num_bing_rand){
            cartones[i].nums_bingo.remove(num_bing_rand)
        }
    }
    res.send()
})

/*Bingo

Crear un servidor API que represente el juego del Bingo.
Debe tener los siguientes endpoints:

1) POST *numero_aleatorio* que recibe un valor como par??metro y devuelve un n??mero aleatorio entre 1 y ese par??metro.
3) POST *iniciar_juego* que crea los cartones, siendo la cantidad de los mismos el n??mero pasado como par??metro.
2) GET *obtener_carton* que devuelve un array con los n??meros del bingo, representando un cart??n del mismo. El nombre del jugador se pasa como par??metro.
4) GET *cartones* Si no se le pasan par??metros (en la URL) devuelve todos los cartones del juego, si no devuelve el cart??n pasado en la URL que fu?? creado con el endpoint *obtener_carton*.
5) GET *sacar_numero* que saca un n??mero del bingo y marca los cartones que lo tienen.

Din??mica del juego:

El juego comienza llamando al endpoint *iniciar_juego* que crea los cartones.
Los usuarios piden los cartones con su nombre (con *obtener_carton*).
Se sacan n??meros con *sacar_numero* hasta que el sistema detecta qu?? cart??n obtuvo el bingo mostrando el nombre del jugador que gan?? o diciendo que qued?? vacante si el cart??n ganador no fu?? reclamado por un jugador.*/
