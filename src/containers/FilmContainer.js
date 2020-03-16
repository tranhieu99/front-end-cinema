import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux'
import '../style/movie.css'
import {getListFilm,addFilmApi, deleteFilmApi} from '../api/film-api'
import ListFilm from '../components/Admin/FilmAdmin/ListFilm'
import ModalFormFilm from '../components/Admin/FilmAdmin/ModalFormFilm'
const FilmContainer = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
  
useEffect(()=>{
    props.getListFilm();
},[])
    return (
        <div>
        <ModalFormFilm buttonLabel = "Thêm phim mới" addFilmApi = {props.addFilmApi}/>

        <ListFilm film = {props.film} deleteFilmApi = {props.deleteFilmApi} />

        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        film: state.filmReducer
    }
}


export default connect(mapStateToProps,{getListFilm,addFilmApi, deleteFilmApi })(FilmContainer);
