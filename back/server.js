const express = require("express");
const cors = require("cors");
const http = require("http");
require("dotenv").config();

const app = express()
const server = http.createServer(app);
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.post("id/save", async (req, res, next) => {
    try {
        // save id
    } catch (error) {
        next("coudent save id")
    }
})

app.get("id/get/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        // const code = await //get code
    } catch (error) {
        next("coudent get id")
    }
})

const io = require("socket.io")

io.on("connection", (socket)=>{
    console.log("connected");
    socket.on("firstConecting", (data)=>{
        socket.broadcast.emit("")
    })
})

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})