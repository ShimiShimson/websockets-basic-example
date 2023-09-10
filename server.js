const http = require("http");
const websocket = require("ws");

//creating a http server
const server = http.createServer((req, res) => {
  res.end("I am connected");
});

const wss = new websocket.Server({ server });

// wss.on('headers', (headers, req) => {
//     console.log(headers)
// })

wss.on("connection", (ws, req) => {
  setTimeout(() => {
    ws.send("This is a message from server, connection is established");
  }, 3000);
  ws.on("message", (msg) => {
    console.log(msg.toString('utf8'));
  });
});
//making it listen to port 8000
server.listen(8000);
