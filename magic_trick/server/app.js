const express = require("express");
const server = express()
//const uuid = require('uuid');
const port = 3000

const items = require('./routes/items') 
server.use("/items", items)

//test 
 server.get("/test", async (req, res) => {
     return res.status(200).json({ success: true })
 })

server.listen(port, () => {
    console.log(`                                   
    
• ▌ ▄ ·.  ▄▄▄·  ▄▄ • ▪   ▄▄·     ▄▄▄▄▄▄▄▄  ▪   ▄▄· ▄ •▄ 
·██ ▐███▪▐█ ▀█ ▐█ ▀ ▪██ ▐█ ▌▪    •██  ▀▄ █·██ ▐█ ▌▪█▌▄▌▪
▐█ ▌▐▌▐█·▄█▀▀█ ▄█ ▀█▄▐█·██ ▄▄     ▐█.▪▐▀▀▄ ▐█·██ ▄▄▐▀▀▄·
██ ██▌▐█▌▐█ ▪▐▌▐█▄▪▐█▐█▌▐███▌     ▐█▌·▐█•█▌▐█▌▐███▌▐█.█▌
▀▀  █▪▀▀▀ ▀  ▀ ·▀▀▀▀ ▀▀▀·▀▀▀      ▀▀▀ .▀  ▀▀▀▀·▀▀▀ ·▀  ▀           
             • Listening on port`, `${port}`)
})