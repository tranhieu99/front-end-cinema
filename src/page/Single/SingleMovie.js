import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Container } from 'reactstrap'
import Breadcrumb from '../../components/Breadcrumb'
import './style.css'
import MovieInformation from '../../components/SingleMovie/MovieInformation.js'
export default function SingleMovie({match}) {
    const [movie,setMovie] = useState({})
    useEffect(() =>{
       Axios.get(
           `http://localhost:5555/movie/${match.params.movie_id}`
       ).then(response =>{ 
           setMovie(response.data)
       })
    }, [])
    return (
        <div className =  "single-wrapper pb-4">
            <Container>
        <Breadcrumb movie_name = {movie.movie_name}/>
        <MovieInformation movie = {movie} movie_id = {match.params.movie_id}/>
            </Container>
        </div>
    )
}
