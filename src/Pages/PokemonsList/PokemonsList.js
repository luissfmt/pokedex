import { useContext } from "react";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";

import { Header } from "../../components/Header/Header";

import { GlobalStateContext } from "../../global/GlobalStateContext";

export function PokemonsList() {
    const { pokemons } = useContext(GlobalStateContext);

    console.log(pokemons);

    return (
        <div>
      
            <Header />

        </div>
    );
};