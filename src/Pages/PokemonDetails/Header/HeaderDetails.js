import React, {useContext} from "react";
import { HeaderContainer } from "./styled";
import pokedexLogo from "../../../assets/pokedex_logo.png";
import { useNavigate } from "react-router-dom";
// import { GlobalStateContext } from "../../global/GlobalStateContext";





export function HeaderDatails(props) {
    const navigate = useNavigate();
    // const {pokemons, pokedex} = useContext(GlobalStateContext)
    const goHome = () => {
        navigate("/");
      };

     const moveRemovePokedex = () => {

     }

    return (
        <HeaderContainer>
            <button onClick={goHome}>
               Voltar
            </button>
            
            <img src={pokedexLogo} alt="Logo Pokedex" />

            <button onClick={moveRemovePokedex}>Add/Rm no Pokedex</button>
        </HeaderContainer>
    );
};