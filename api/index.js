import http from 'http';
import socketIO from 'socket.io';

const server = http.createServer();
const io = socketIO(server);

io.on('connection', socket => {
    socket.emit('connected', 'you are connected');
    console.log("someone is connected")

    socket.on('disconnect', () => {
        console.log('someone has disconnected');
    });
});

const port = 3001;

server.listen(port, () => {
    console.log("Server listening: http://localhost{"+ port +"}")
})