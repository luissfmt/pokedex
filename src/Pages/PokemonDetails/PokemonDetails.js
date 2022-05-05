import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom"
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {BASE_URL} from "../../constants/url"
import { Header } from "../../components/Header/Header";

export function PokemonDetails () {
    const {name, telaPokedex} = useParams()
    const {pokemons, pokedex} = useContext(GlobalStateContext)
    const [selectedPokemon, setSelectedPokemon] = useState({});
    const navigate = useNavigate()

    useEffect (() => {
        let current = []
        if (telaPokedex) {
            current = pokedex.find((item) =>{
                return item.nome === name;
            })
        } else {
                current = pokemons.find((item) =>{
                    return item.name === name; 
                })
            }

            if (!current) {
                axios.get(`${BASE_URL}/pokemon/${name}`)
                .then((res) => selectedPokemon(res.data))
                .catch((err) => console.log(err.reponse.message))
            } else {
                setSelectedPokemon(current);
            }
        },[])

    return(
        <div>
            <Header/>
            <div className="ContainerInfos">
                {selectedPokemon && selectedPokemon.sprites &&
                <div className="imagem">
                    <img src={selectedPokemon.sprites.front_default} alt="foto pokemon" />
                    <img src={selectedPokemon.sprites.back_default} alt="foto pokemon" />
                </div>
                }

                <div className="stat">
                {selectedPokemon && selectedPokemon.stats.map((stat) => {
                        return(
                                <p key={stat.stat.name}>
                                    <strong>{stat.stat.name}</strong> {stat.base.stat}
                                </p>
                        )})
                }
                </div>


                <div className="habilidade">
                    <div className="tipo">
                    {selectedPokemon &&
                    selectedPokemon.types.map((type) => {
                        return(
                                <p key={type.type.name}>{type.type.name}</p>
                        )})
                    }
                    </div>

                    <div className="moves">
                    {selectedPokemon &&
                    selectedPokemon.moves.map((move, index) => {
                        return(
                                index <5 && <p key={move.move.name}>{move.move.name}</p>
                        )})
                    }
                    </div>
                </div>

            </div>
        </div>
    
    )
}