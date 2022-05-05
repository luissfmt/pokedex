import React, { useContext } from "react";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { Header } from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { ContainerList } from "../../components/CardStyle/styled";
import backgroundPokedex from "../../assets/pokedex_background.png";

export function Pokedex() {
    const { pokedex } = useContext(GlobalStateContext)

    return (
        <div>
            <Header 
            isPokedexPage
            />

            <ContainerList>
                {pokedex &&
                    pokedex.map((pokemon) => {
                        return <CardPokemon isPokedexPage
                         key={pokemon.name} pokemon={pokemon} image={pokemon.sprites.front_default} name={pokemon.name} backgroundPokedex={backgroundPokedex} />;
                    })}
            </ContainerList>
        </div>
    )
}