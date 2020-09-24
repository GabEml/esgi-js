import React, { useState } from 'react';


export default ({ setName }) => {
    const [name, setname] = useState()
    
    function handleChange(e){
        e.preventDefault();
        let name = e.target.value
        setname(name)
     }
    
    const handleClick = (e) => {
        e.preventDefault();
        setName(name)
     }
    
    return (
        <div className="c-page">
            <div className="c-login">
                <div className="c-box">
                    <div className="c-form">
                        <div className="u-color-white">Bienvenue sur PokeApp</div>
                         <p>Entrer un nom</p>
                        <div className="u-d-flex u-mt-xl u-justify-center">
                            <input type="text" onChange={handleChange} name="name" value={name} placeholder="Nom..." className="u-mr-sm" />
                            <button type="submit" onClick={handleClick}>
                                Entrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
