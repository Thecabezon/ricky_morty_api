import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";


function HomePage() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="Banner 1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="Banner 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="Banner 3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container mt-5">
                <h1>Bienvenido a Ricky and Morty API</h1>
                <p>Esta es la página principal. Usa el navbar para ir a la sección de Items.</p>
            </div>
        </>
    );
}

export default HomePage;