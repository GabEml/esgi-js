import pokemons from '../app/src/pokemons';

export const startGame = (players, config) => {
    console.log('Game starting...');

    for (const player of players) {
        player.pokemon = { ...pokemons[player.poke] };
    }

    config.turn = Math.floor(Math.random() * 2); // 0 1

    // for (let i = 0; i < players.length; i++)
    for (const [index, player] of players.entries()) {
        const { socket, ...you } = player;
        // const { socket: _, ...opponent} = players.find(localPlayer => localPlayer.socket.id !== player.socket.id);
        const { socket: _, ...opponent} = players.find(localPlayer => {
            return localPlayer.socket.id !== player.socket.id;
        });
        console.log(you)
        console.log(opponent)
        player.socket.emit('started', {
            you,
            opponent,
            turn: index === config.turn ? 'you' : 'opponent',
        });
    }
};

export const terminateGame = (socket, players) => {
    console.log('Game terminating...');

    const index = players.findIndex(player => player.socket.id === socket.id);

    if (-1 !== index) {
        players.splice(index, 1);
    }

    for (const player of players) {
        player.pokemon = null;
        player.socket.emit('terminated');
    }
};

export const handleMove = (moveId, players, config) => {
    // if(config.turn){
    //     moveId 
    // }
    // console.log(`${activePlayer.name} with "${activePlayer.pokemon.name}" has played "${move.name}"`);
    // console.log(`${opponent.pokemon.name} (${opponent.pokemon.hp}hp) has taken ${move.power} damages`);

    // TODO
};

const updateGame = (moveId, players, config) => {
    // TODO
};

const endGame = players => {
    console.log('Game ending...');

    // TODO
};