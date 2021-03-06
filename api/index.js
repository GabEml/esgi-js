import http from 'http';
import socketIO from 'socket.io';
import { startGame, terminateGame, handleMove } from './game'

const server = http.createServer()

const io = socketIO(server, {
    pingTimeout: 60000,
});

// Shape of Player { name, socket, pokemon }
const players = [];
let config = { turn: 0 };

io.on('connection', socket => {
    const name = socket.handshake.query.name || 'Someone';
    const poke = socket.handshake.query.pokemon;
    console.log(`${poke} sectionnné`)
    console.log(`${name} is connected`);
    socket.emit('connected');

    if (players.length < 2 && poke) {
        players.push({ name, socket, poke });
    } else {
        socket.emit('connection_refused');
        socket.disconnect();
    }

    if (2 === players.length) {
        startGame(players, config);
    }

    socket.on('disconnect', () => {
        console.log(`${name} has disconnected`);
        terminateGame(socket, players);
    });

    socket.on('move', moveId => {
        handleMove(moveId, players, config);
    });
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});