import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux'
import '../style/movie.css'
import {getListFilm,addFilmApi, deleteFilmApi,editFilmApi} from '../api/film-api'
import ListFilm from '../components/Admin/FilmAdmin/ListFilm'
import ModalFormFilm from '../components/Admin/FilmAdmin/ModalFormFilm'
import AddFilmType from '../components/Admin/FilmAdmin/AddFilmType'
const FilmContainer = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
  
useEffect(()=>{
    props.getListFilm();
},[])
    return (
        <div>
            <div className="d-flex ">
            <ModalFormFilm buttonLabel = "Thêm phim mới"  addFilmApi = {props.addFilmApi}/>
            <AddFilmType buttonLabel = "Thêm thể loại "/>
            </div>
     
        <ListFilm film = {props.film} editFilmApi = {props.editFilmApi} deleteFilmApi = {props.deleteFilmApi} />

        </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        film: state.filmReducer
    }
}


export default connect(mapStateToProps,{getListFilm,addFilmApi, deleteFilmApi, editFilmApi })(FilmContainer);
