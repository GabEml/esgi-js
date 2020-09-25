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
    const [socket, setSocket] = useState()
    const [status, setStatus] = useState("waiting")
    const [data, setData] = useState()

    useEffect(()=>{
        if(!name && !poke){
            return;
        }
        setSocket(io(`http://localhost:3000?name=${name}&pokemon=${poke}`))
    },[name, poke])

    useEffect(()=>{
        if(!socket){
            return;
        }
        socket.on('started', localdata => {
            console.log(localdata)
            setData(localdata)
        })
    }, [socket])

    return (
        <div className="c-app">
            {/* <WelcomeView />  */}
            {!name && <LoginView setName={setName} />} 
            {name && !poke && <ChooseView selectPoke={setPoke} />}
            {/* {name && poke && <GameView socket={socket} data={data} status={status} />} */}
        </div>
    );
};
