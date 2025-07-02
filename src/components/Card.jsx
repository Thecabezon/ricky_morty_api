

function Card({ character }) {
    return (
        <div className="card h-100 shadow-sm">
            <img src={character.image} className="card-img-top" alt={`Imagen de ${character.name}`} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                    <strong>Estado:</strong> {character.status}
                </p>
                <p className="card-text">
                    <strong>Especie:</strong> {character.species}
                </p>
                <p className="card-text">
                    <strong>Origen:</strong> {character.origin.name}
                </p>
                <a href="#" className="btn btn-primary mt-auto">Ver más</a>
            </div>
        </div>
    );
}

export default Card;