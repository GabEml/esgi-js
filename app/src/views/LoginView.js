import React, { useState } from 'react';

export default () => {
    const [name, setname] = useState("");

    return (
        <div className="c-page">
            <div className="c-login">
                <div className="c-box">
                    <div className="c-form">
                        <div className="u-color-white">Bienvenue sur PokeApp</div>
                        {( {name} === "") ? <p>Vous n'avez pas choisi de nom !!</p> : <p>Vous etes player {name}</p> }
                        <div className="u-d-flex u-mt-xl u-justify-center">
                            <input type="text" name="name" placeholder="Nom..." className="u-mr-sm" />
                            <button type="submit" onClick={(e) => setname(e.target.name)}>
                                Entrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
