import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"
import axios from "axios"
import ReviewCard from "./ReviewCard"

function SingleMoviePage() {
    const { id } = useParams()
    const { backendUrl } = useGlobalContext()

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        axios.get(`${backendUrl}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data)
        })
    }, [])

    return (
        <>
            {movie && (
                <>
                    <section>
                        <img className="w-50" src={`${backendUrl}/images/${movie.image}`} />
                        <h1>{movie.title}</h1>
                        <h2>{movie.director}</h2>
                        <p>Voto: {movie.vote_avg}</p>
                        <p>Genere: {movie.genre}</p>
                        <p>{movie.abstract}</p>
                    </section>
                    <section>
                        <div className="row row-cols-1 g-3">
                            {movie.reviews.map(curReview => <ReviewCard key={curReview.id} review={curReview} />)}
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default SingleMoviePage