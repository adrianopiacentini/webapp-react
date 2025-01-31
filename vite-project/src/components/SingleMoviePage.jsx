import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../contexts/GlobalContext"
import axios from "axios"

function SingleMoviePage() {
    const { id } = useParams()
    const { backendUrl } = useGlobalContext()
    useEffect(() => {
        axios.get(`${backendUrl}/movies/${id}`).then((resp) => {
            console.log(resp)
        })
    }, [])

    return (
        <>
            <section>
                <h1>Pagina di un singolo film {id}</h1>
            </section>
        </>
    )
}

export default SingleMoviePage