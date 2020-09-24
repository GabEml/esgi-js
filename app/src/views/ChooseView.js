import React from 'react';
import RandomPoke from './RandomView'

export default ({ selectPoke }) => {

    const infoPoke = (pokeValide) => {
        selectPoke(pokeValide)
    }

    return (
        <div className="c-page">
            <div className="c-choose">
                <div className="c-box">
                    <div className="u-color-white u-mb-lg">Choisissez votre Pokemon</div>
                    <div className="u-d-flex">
                        <RandomPoke selectPoke={infoPoke} />
                    </div>
                </div>
            </div>
        </div>
    );
};