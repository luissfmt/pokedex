import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext"

export function CardPokemon(props) {
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext);
    
    const addToPokedex = () => {
        //Encontra o index do pokémon clicado pela função
        const ClickedPokemonIndex = pokemons.findIndex((pokemon) => pokemon.name === props.pokemon.name);

        // ------- Faz a cópia do array de estado pokémon
        const newPokemonsList = [...pokemons];

        // ------- Remove o pokemón clicado da lista de pokémon
        newPokemonsList.splice(ClickedPokemonIndex, 1);
        
        // ------- Ordena a lista de pokémon de acordo com suas evoluções 
        const orderedPokemonsList = newPokemonsList.sort((pokemonA, pokemonB) => {
            return pokemonA.id - pokemonB.id;
        });

        // ------- Faz a cópia do array de estado pokedex
        const newPokedexList = [...pokedex];

        // ------- Adiciona o pokémon selecionado a pokedex
        newPokedexList.push(props.pokemon);
        
        // ------- Ordena a lista da pokedex de acordo com suas evoluções
        const orderedPokedexList = newPokedexList.sort((pokemonA, pokemonB) => {
            return pokemonA - pokemonB;
        });
        
        // ------- Atualiza os estados após a execução das funções
        setPokedex(orderedPokedexList);
        setPokemons(orderedPokemonsList);
        console.log("POKEDEX: ", pokedex);
    };

  
    const removeFromPokedex = () => {
        //Encontra o index do pokémon cliclado pela função
        const pokeIndex = pokedex.findIndex((item) => item.name === props.pokemon.name);

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
            <div>
                <img src={props.image} alt={props.name} />
                <p>{props.name}</p>

                <button onClick={ props.isPokedexPage ? removeFromPokedex : addToPokedex }>
                    {props.isPokedexPage ? "Remover da Pokedex" : "Adicionar a Pokedex"}
                </button>

                <button>Detalhes</button>
            </div>
        </>
    )
}