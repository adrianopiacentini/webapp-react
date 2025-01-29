import { useEffect, useState } from "react"
import axios from 'axios'
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../contexts/GlobalContext";

function MovieList() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const { backendUrl } = useGlobalContext()
    const getMovies = () => {
        const params = {}
        if (search.length > 0) { params.search = search }

        axios.get(`${backendUrl}/movies`, { params }).then((resp) => {
            setMovies(resp.data.data)
        })
    }
    useEffect(() => {
        getMovies()
    }, []);

    return (
        <>
            <section>
                <h1>Tutti i nostri film!</h1>
                <p>Dai un'occhiata ai film che abbiamo preparato per te!</p>
            </section>
            <section>
                <h2>Lista dei film</h2>
                <div className='my-4 d-flex'>
                    <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" className='form-control' placeholder='Cerca film' />
                    <button onClick={getMovies} className='btn btn-primary ms-2'>Cerca</button>
                </div>
                {
                    movies.length > 0 ? (
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>

                            {movies.map((curMovie) => (
                                <div className='col' key={curMovie.id}>
                                    <MovieCard movie={curMovie} />
                                </div>
                            ))}

                        </div>
                    ) : <div className='alert alert-warning'>Non abbiamo trovato risultati relativi alla tua ricerca. Riprova.</div>
                }

            </section>

        </>
    )
}

export default MovieList