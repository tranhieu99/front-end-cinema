import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomeSlider from '../components/Home/SliderHome'
import ListMovies from '../components/Home/ListMovies'
import { getListFilm } from '../api/film-api';
import '../style/home.css';

function Home(props) {
  
    useEffect(() => {
      props.getListFilm();
    }, [])
    console.log(props)

    return (
      <div style = {{overflowX: "hidden"}} className ="home-page-wrapper">
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<HomeSlider />
<ListMovies movie = {props.movie}/>
      </div>
    );
}

const mapPropsToState = (state) => {
  return {
    movie: state.filmReducer
  }
}

export default connect(mapPropsToState,{getListFilm})(Home)