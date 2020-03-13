import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux'
import '../style/movie.css'
import {getListFilm} from '../api/film-api'
import ListFilm from '../components/Admin/FilmAdmin/ListFilm'
import ModalFormFilm from '../components/Admin/FilmAdmin/ModalFormFilm'
const FilmContainer = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
  
useEffect(()=>{
    props.getListFilm();
},[])
console.log(props.film)
    return (
        <div>
        <ModalFormFilm buttonLabel = "Thêm phim mới" />

        <ListFilm film = {props.film} />

        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        film: state.filmReducer
    }
}


export default connect(mapStateToProps,{getListFilm})(FilmContainer);
