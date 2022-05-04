import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/PokemonsList/PokemonsList";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { PokemonDetails } from "../pages/PokemonDetails/PokemonDetails";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<HomePage />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />

            </Routes>
        </BrowserRouter>
    );
};