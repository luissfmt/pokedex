import React, { useContext } from "react";
import { PokedexContainer } from "./styled";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { Header } from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext"

export function Pokedex() {
    const { pokedex } = useContext(GlobalStateContext)

    return (
        <div>
            <Header />
            <PokedexContainer>
                {pokedex &&
                    pokedex.map((pokemon) => {
                        return <CardPokemon isPokedex key={pokemon.name} pokemon={pokemon} />;
                    })}
            </PokedexContainer>
        </div>
    )
}