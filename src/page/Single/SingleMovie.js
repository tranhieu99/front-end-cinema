import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Container } from 'reactstrap'

export default function SingleMovie({match}) {
    console.log(match.params.movie_id)
    const [movie,setMovie] = useState({})
    useEffect(() =>{
       Axios.get(
           `http://localhost:5555/movie/${match.params.movie_id}`
       ).then(response =>{ 
           setMovie(response.data)
       })
    }, [])
    return (
        <div>
            <Container>
            {`${movie.movie_name}`}
            {`${movie.movie_describe}`}

            </Container>
        </div>
    )
}
