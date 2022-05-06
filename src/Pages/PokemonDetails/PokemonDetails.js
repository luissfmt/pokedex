import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { BASE_URL } from "../../constants/url"
import { HeaderDatails } from "./Header/HeaderDetails";
import { ContainerDatails, Collumn, ContainerImage,  ContainerStats, ContainerTypes, ContainerMoves, Titulo } from "./styled";

export function PokemonDetails() {
    const params = useParams();
    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`).then((res) => {

            console.log("deu certo", params.name)

            console.log(res.data)
            setSelectedPokemon(res.data);

        });
    }, []);

    return (
        <div>
            <HeaderDatails />
            <Titulo>
             <h1>{params.name}</h1>   
            </Titulo>
            <ContainerDatails>
                <Collumn>
                    <ContainerImage>
                        <img src={selectedPokemon.sprites && selectedPokemon.sprites.front_default} />
                    </ContainerImage>

                    <ContainerImage>
                        <img src={selectedPokemon.sprites && selectedPokemon.sprites.back_default} />
                    </ContainerImage>
                </Collumn>

                <Collumn>
                    <ContainerStats>
                         <h2><strong>Poderes</strong></h2>
                        {selectedPokemon.stats &&
                            selectedPokemon.stats.map((stat) => {
                                return (
                                    <p key={stat.stat.name}>
                                        <strong>{stat.stat.name}: </strong>
                                        {stat.base_stat}
                                    </p>
                                );
                            })}
                    </ContainerStats>
                </Collumn>

                <Collumn>
                    <ContainerTypes>
                        <h2><strong>Tipo</strong></h2>
                        {selectedPokemon.types && selectedPokemon.types.map((type) => {
                            return <p key={type.type.name}><strong>{type.type.name}</strong></p>;
                        })}

                    </ContainerTypes>

                    <ContainerMoves>
                        <h2><strong>Principais Ataques</strong></h2>
                        {selectedPokemon.moves &&
                            selectedPokemon.moves.map((move, index) => {
                                return (
                                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                                );
                            })}
                    </ContainerMoves>
                </Collumn>
            </ContainerDatails>
        </div>
    )


}