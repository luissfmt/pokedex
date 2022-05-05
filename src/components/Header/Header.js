import { HeaderContainer } from "./styled";

import pokedexLogo from "../../assets/pokedex_logo.png";

import { goToPokedex, goToPokemonsList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export function Header(props) {
    const navigate = useNavigate();

    return (
        <HeaderContainer>

            <div>
                <button onClick={props.isPokedexPage ? () => goToPokemonsList(navigate) : () => goToPokedex(navigate)}>
                    {props.isPokedexPage ? "Voltar para lista de Pokémons" : "Ir para pokedex" }
                </button>

                <h1>
                    {props.isPokedexPage ? "Pokedex" : "Lista de Pokemons"}
                </h1>

                <img src={pokedexLogo} alt="Logo Pokedex" />
            </div>
            
        </HeaderContainer>
    );
};