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

// app.get("/", (req, res) => {
//   res.send("Hello, World!")
// })  

io.on("connection", (socket) => {
  console.log("New user connected") 
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})


