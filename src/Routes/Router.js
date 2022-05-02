import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { Pokedex } from "../Pages/Pokedex/Pokedex";
import { PokemonDetails } from "../Pages/PokemonDetails/PokemonDetails";

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