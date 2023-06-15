const express = require("express");
const cors = require("cors");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
	console.log(`Server listening at http://localhost:${serverPort}`);
});

let historicData = null;

server.post("/calc", (req, res) => {
	const data = req.body;
	historicData = data;
	res.json(historicData);
	console.log(res.json(data));
});

server.get("/historic", (req, res) => {
	if (historicData) {
		res.json(historicData);
	} else {
		res.status(404).send("No se encontraron datos históricos");
	}
});
