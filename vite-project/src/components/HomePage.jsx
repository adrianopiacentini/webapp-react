import axios from 'axios'
import { Link } from 'react-router-dom'

function HomePage() {
    // axios.get('http://localhost:3000/movies').then((resp) => {
    //     console.log(resp.data)
    // })
    return (
        <>
            <section>
                <h1>Benvenuto nel nostro sito di film!</h1>
                <p>Qui puoi lasciare le tue recensioni e visualizzare quelle degli altri utenti.</p>
                <Link className='btn btn-primary' to='/movielist'>Vedi tutti i film</Link>
            </section>

        </>
    )
}

export default HomePage