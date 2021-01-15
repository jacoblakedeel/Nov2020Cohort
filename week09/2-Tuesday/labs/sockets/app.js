const express = require('express');
const app = express();
const socket = require('socket.io');



app.set('view engine', 'ejs');


app.use(require('./routes/index'));


let server = app.listen(3000, () => {
    console.log(`Listening on PORT 3000`);
})

let io = socket(server);

io.on('connection', (socket) => {
    ///this message will be broadcast out to each connected client

    socket.emit('chatMessage', {msg:'hello from our back-end'})

    socket.on('msgFromClient', (msgClient) => {
        
        io.emit('msgFromServer', msgClient)
    })
})