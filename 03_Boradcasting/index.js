import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import { Server } from "socket.io";
import { createServer } from "http";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const server = createServer(app)
const io = new Server(server)
const PORT =  8000

app.get("/", (req, res) => {
  res.sendFile(path.join( __dirname, "client/index.html"))  
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})


