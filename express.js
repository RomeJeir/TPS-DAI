const express = require("express");
const app = express();
const PORT = 3000;

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


let num_max = prompt("Ingrese la cantidad maximo de numeros:", "");
let cant_cartones = numero_aleatorio(num_max);
let bingo_max = 25;


function obtener_carton(nom_jug){
    let cart = iniciar_juego();
    for(g = 0;g<cant_cartones;g++)
    {
        for(i=0;i<bingo_max;i++)
        {
            let nums_bing = Math.Random(1,100);
        }
        cart[g].nums_bingo.push(nums_bing)
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

function numero_aleatorio(num_max)
{
    let num_ran = Math.random(1,num_max);
    return num_ran;
}


app.post("/numero_aleatorio", (req,res) => {
    rando_num = numero_aleatorio(num_max)
    res.send(rando_num)
})

app.post("/iniciar_juego", (req,res) => {
    start = iniciar_juego()
    res.send(start)
})

app.get("/obtener_carton", (req,res) => {
    let nom_jug = prompt("Ingrese el nombre del jugador:", "");
    obt_cart = obtener_carton(nom_jug)
    res.send(obt_cart)
})

