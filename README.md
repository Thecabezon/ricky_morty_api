// src/pages/ItemsPage.js

import { useState, useEffect } from "react";
import Card from "../components/Card"; // Asumimos que Card está en esta ruta

function ItemsPage() {
    // Cambiamos el nombre del estado para que sea más descriptivo
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Renombramos la función para mayor claridad
        const fetchPokemons = async () => {
            try {
                // IDs de los Pokémon que queremos mostrar
                const pokemonIds = [1, 4, 7, 25, 133]; // Bulbasaur, Charmander, Squirtle, Pikachu, Eevee

                // Creamos un array de promesas de fetch, una para cada ID
                const promises = pokemonIds.map(id =>
                    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
                );

                // Usamos Promise.all para esperar a que todas las peticiones terminen
                const data = await Promise.all(promises);

                // Guardamos el array de Pokémon en el estado
                setPokemons(data);

            } catch (error) {
                console.error("Error fetching Pokémon:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();

    }, []); // El array vacío asegura que se ejecute solo una vez

    if (loading) {
        return <div>Cargando Pokémon...</div>;
    }

    return (
        <div className="container">
            <h1 className="my-4 text-center">Lista de Pokémon</h1>
            <div className="row">
                {/* Mapeamos sobre el estado 'pokemons' */}
                {pokemons.map((pokemon) => (
                    <div key={pokemon.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        {/* Pasamos el objeto completo como prop 'pokemon' */}
                        <Card pokemon={pokemon} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemsPage;
