const express = require("express");
const cors = require("cors");
const {Server} = require("socket.io")
const {createServer} = require("http")
require("dotenv").config();
const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer)

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

const allUsersObj = []
io.on("connection", (socket)=>{
    console.log(socket.id, "connected");
    socket.on("setUserName", (userName)=>{
        const userObj = {id: socket.id, userName}
        allUsersObj.push(userObj)
        socket.emit("getID", (userObj))
    })
    socket.on("newUserLogin", ()=>{
        allUsersObj.push(socket.id)
        console.log(allUsersObj);
        socket.broadcast.emit("newUserLogin")
    })
    socket.on("sendMessage", (msgObj)=>{
        console.log(msgObj);
        io.emit("getNewMsg", msgObj)
    })
    socket.on("disconnect", ()=>{
        allUsersObj.splice(allUsersObj.indexOf(socket.id), 1)
    })
})

io.sockets.on("error", e=> console.log(e))

httpServer.listen(port, () => {
    console.log(`listening on port ${port}`);
})