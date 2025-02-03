import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"
import axios from "axios"
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"

function SingleMoviePage() {
    const { id } = useParams()
    const { backendUrl } = useGlobalContext()

    const [movie, setMovie] = useState(null)

    const getMovie = () => {
        axios.get(`${backendUrl}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data)
        })
    }

    useEffect(() => {
        getMovie()
    }, [])

    const submitReview = (formData) => {
        // console.log('Submit review', movie.id, formData)
        axios.post(`${backendUrl}/movies/${movie.id}/reviews`, formData).then((resp) => {
            console.log(resp)
            getMovie()
        })

    }

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
                            {movie.reviews.map((curReview, index) => <ReviewCard key={index} review={curReview} />)}
                        </div>
                    </section>
                    <section className='mt-5'>
                        <div className='row justify-content-center'>
                            <div className='col-8'>
                                <ReviewForm submitReview={submitReview} />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default SingleMoviePage