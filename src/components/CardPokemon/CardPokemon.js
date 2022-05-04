import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext"

export function CardPokemon(props) {
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext);

    const removeFromPokedex = () => {
        //Encontra o index do pokémon cliclado pela função
        const pokeIndex = pokedex.findIndex((item) => item.name === props.poke.name);

        // ------- Copia lista de pokemons na pokedex
        const newPokedexList = [...pokedex]

        // ------- Remove o pokemon selecionado
        newPokedexList.splice(pokeIndex, 1);

        // ------- Ordena a lista da pokedex
        const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id;
        });

        // ------- Copia lista de pokemons
        const newPokemonsList = [...pokemons];

        // ------ Atualiza lista de pokemons
        newPokemonsList.push(props.pokemon)

        // ------- Ordena lista de pokemons
        const orderedPokemons = newPokemonsList.sort((a, b) => {
            return a.id - b.id
        })
        // Atualiza os estados
        setPokedex(orderedPokedex)
        setPokemons(orderedPokemons)
    };

    return (
        <>
        </>
    )
};