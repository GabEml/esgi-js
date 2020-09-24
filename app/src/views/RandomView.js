import React, { useState } from 'react';
import pokejson from '../pokemons'


export default ({ selectPoke }) => {
    let pokeArray = []
    const [poke, setpoke] = useState();

    for(let i = 0; i <= 2;i++){
        pokeArray.push(pokejson[Math.floor(Math.random() * pokejson.length)]);
    }

    let handleClick = (e) => {
        e.preventDefault();
        setpoke(e.target.id)
        selectPoke(poke)
    }      

    return pokeArray.map( (pokeMonster) => <img
            key={pokeMonster.originalId}
            id={pokeMonster.originalId}
            onClick={handleClick}
            alt="Opponent Pokemon"
            src={pokeMonster.image}
        />)
};
