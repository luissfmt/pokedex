import { HeaderContainer } from "./styled";

import pokedexLogo from "../../assets/pokedex_logo.png";

export function Header() {
    return (
        <HeaderContainer>

            <div>
                <button>Ir para Pokedex</button>

                <img src={pokedexLogo} alt="" />

                <p>Lista de Pokemóns</p>
            </div>
            
        </HeaderContainer>
    );
};