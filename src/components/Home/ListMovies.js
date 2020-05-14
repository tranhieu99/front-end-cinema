import React from 'react'
import Slider from 'react-slick'
import Loading from '../Loading'
export default function ListMovies({movie}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // nextArrow: '>',
        // prevArrow: '<'
  
    };
    return (
        <div className = "list-film-home">
          
            <div className = "container"> 
            <h1> Phim đang chiếu</h1>
            <Slider {...settings }>

{!movie.length ? <Loading /> : movie.map((item,index) => {
    return(
    <div class="list-film__item">
    <img src = {`${item.movie_image}`} alt = {`${item.movie_name}`}/>
    <h2> {item.movie_name} </h2>

    </div>
    )
})}
            </Slider>
            </div>
        </div>
    )
}
