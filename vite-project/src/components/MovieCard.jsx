import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

function MovieCard({ movie }) {
    const { backendUrl } = useGlobalContext()

    return (
        <>
            <div className="card h-100 card-img-top">
                <img src={`${backendUrl}/images/${movie.image}`} className="card-img-top" alt={`Immagine di ${movie.title}`} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <h6>{movie.director}</h6>
                    <p className="card-text">{movie.abstract}</p>
                    <Link className="btn btn-primary" to={`/movielist/${movie.id}`}>Mostra dettagli</Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard