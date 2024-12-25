const express = require('express')
const app = express()
const http = require('http')
const socket = require('socket.io')
const server = http.createServer(app)
const io = socket(server)


app.set("view engine", "ejs") 
app.set(express.static(path.join(__dirname, "public")))
app.get('/', (req, res) => {
    res.json({message: "all good"})
})

app.listen(1515,() =>  console.log("server on..."))