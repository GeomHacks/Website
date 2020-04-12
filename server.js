const http = require('http');
const express = require('express');

const app = express();


const clientPath = `${__dirname}/../client`;
console.log(`Serving stativ from ${clientPath}`);
app.use(express.static(clientPath));
const server = http.createServer(app);

server.listen(8084, () =>{
  console.log('Game started on 8084');
});
server.on('error', (err) => {
  console.error('server error:', err);
});
