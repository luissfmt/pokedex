import { useContext } from "react";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";

import { Header } from "../../components/Header/Header";

import { GlobalStateContext } from "../../global/GlobalStateContext";

export function PokemonsList() {
    const { pokemons } = useContext(GlobalStateContext);

    return (
        <div>
      
            <Header />

            {pokemons && pokemons.map((pokemon) => {
                return <CardPokemon pokemon={pokemon} image={pokemon.sprites.front_default} name={pokemon.name} />
            })}

        </div>
    );
};