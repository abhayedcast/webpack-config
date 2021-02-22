import React, {useState} from 'react';

const elvenShieldReciepe = {
    leatherStrios: 2,
    ironIgnot: 1,
    refinedMoonstone: 4,
};

const elvemGauntReciepe = {
    ...elvenShieldReciepe,
    leather: 1,
    refineMoonstome:4
}

console.log(elvenShieldReciepe);
console.log(elvemGauntReciepe);



const Recipes = () => {

    const [reciepe, setReciepe] = useState({})
    return (
        <div>
            <h3>Current Reciepe</h3>
            <button onClick={() => setReciepe(elvenShieldReciepe)}>Elven Shield Reciepe</button>
            <button onClick={() => setReciepe(elvemGauntReciepe)}>Elven Gaunt Reciepe</button>
            <ul>
                {Object.keys(reciepe).map((mateiral) => (
                    <li key={mateiral}>
                        {mateiral}: {reciepe[mateiral]}
                    </li>
                ))}
            </ul>
        
        </div>
    )
}

export default Recipes
