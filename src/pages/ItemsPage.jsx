
import { useState, useEffect, use } from "react";
import Card from "../components/Card";



function ItemsPage() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchCharacters = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");

                const data = await response.json();

                setCharacters(data.results);

            } catch (error) {
                console.error("Error fetching characters:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();

    }, []);

    if (loading) {
        return <div> Cargando personajes...</div>;
    }

    return (
        <div className="container">
            <h1 className="my-4 text-center">Personajes de Rick y Morty</h1>
            <div className="row">
                {characters.map((char) => (
                    <div key={char.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <Card character={char} />
                    </div>
                ))}
            </div>
        </div>

    );



}

export default ItemsPage;
