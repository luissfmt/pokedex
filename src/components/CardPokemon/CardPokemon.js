import React from "react";

function CardPokemon({name, image}) {

    return (
        <div>
            {name}
            <img src={image} alt={name} />
            {!Pokedex && <Button onClick={addToPokedex}>Adicionar</Button>}
            {Pokedex && <Button onClick={removeFromPokedex}>Remover</Button>}
            <button onClick={navigate(`/details/${name}`)}>Detalhes</div></button>
        </div>
    )
}

export default CardPokemon;