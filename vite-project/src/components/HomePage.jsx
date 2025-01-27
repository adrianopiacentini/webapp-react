import axios from 'axios'
function HomePage() {

    axios.get('http://localhost:3000/movies').then((resp) => {
        console.log(resp.data)
    })
    return (
        <>
            <h1>Homepage</h1>
        </>
    )
}

export default HomePage