const express = require('express');
const cors = require('cors');


// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


server.post('/calc', (req, res) => {
  const response = req.body;
  res.json(response);
  console.log( res.json(response));
});

const staticServer = './src/public-react';
server.use(express.static(staticServer));


