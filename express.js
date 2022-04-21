const express = require("express");
const app = express();
const PORT = 3000;

const process_data = (datos) => {

    let x = 100;

    return {
        resultado: x
    };
};
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