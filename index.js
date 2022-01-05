// node js code
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("chat", function(msg) {
        console.log('message f  rom user#' + socket.userId + ": " + msg);
    });
    // io.emit('chat', "server result");
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
http.listen(process.env.PORT || 3000, () => {
    console.log('Connected at 3000');
});