import React from 'react'
import { Row, Col } from 'reactstrap'
import ModalTrailer from '../Home/ModalTrailer'
import AssignMovie from './AssignMovie'
import '../../style/singleMovie.css'

export default function MovieInformation({movie, movie_id}) {
    return (
            <Row>
                <Col md ={4}>
                    <img src= {movie.movie_image} width = "250"/>
                </Col>
                <Col md = {8} className = "movie_detail">
                    <h2>{movie.movie_name}</h2>
                    <p>{movie.movie_describe}</p>
                    <p>Thể loại: {movie.type_name}</p>
                    <p>Đạo diễn: {movie.movie_director}</p>
                    <div class="btn-group">
                        <ModalTrailer  movie_trailer = {movie.movie_trailer} buttonColor = "primary" buttonLabel = "Xem Trailer" />
                    </div>
                </Col>
                <Col md = {12}>
                    <AssignMovie movie_id = {movie_id}/>
                </Col>
            </Row>
    )
}
