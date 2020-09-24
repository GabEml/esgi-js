import React, { useState, useEffect } from 'react';
import GameView from './views/GameView';
import LoginView from './views/LoginView';
import WelcomeView from './views/WelcomeView';
import ChooseView from './views/ChooseView';
import pokejson from './pokemons.json'
import io from 'socket.io-client'


export default () => {
    const [name, setName] = useState()
    const [poke, setPoke] = useState()
    const [socket, setSocket] = useState();

    useEffect(()=>{
        if(!name){
            return;
        }
        setSocket(io(`http://localhost:3001?name=${name}`))
    },[name])

    // useEffect(()=>{
    //     socket.on('started', data => {
    //         console.log(data)
    //     })
    // }, [socket])
    console.log(poke)
    return (
        <div className="c-app">
            {name && poke && <GameView />}
            {!name && <LoginView setName={setName} />} 
            {/* <WelcomeView />  */}
            {name && <ChooseView selectPoke={setPoke} />}
        </div>
    );
};
