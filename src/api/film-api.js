import axios,{get,post } from 'axios'
import {getFilms,addFilm, deleteFilm,editFilm } from '../actions/index'
const getListFilm = () => (dispatch)=> {
get('http://localhost:5555/admin/film').then(response => {
    dispatch(getFilms(response.data))
}).catch(err => {
    console.log(err)
})
}

const addFilmApi = (formData) => (dispatch) =>{
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    post('http://localhost:5555/admin/film',formData,config).then(response => {
    console.log(response)
    dispatch(addFilm(response.data))
    }).catch(err => {
        console.log(err)
    })
}

const deleteFilmApi = (movie_id) => (dispatch) =>{
    console.log(movie_id)
    axios({ method: 'DELETE', url: `http://localhost:5555/admin/film/delete/${movie_id}` })
    .then((response)=>{
console.log(response)
        dispatch(deleteFilm(movie_id))
    })
    .catch(err => {
        console.log(err)
    })
}
const editFilmApi = (movie,movieState) => (dispatch) => {
    axios.put(`http://localhost:5555/admin/film/edit/${movieState.movie_id}`, movie)
    .then((response => {
        dispatch(editFilm(response.data))

    }))
}

const addFilmType = (formData,cb) =>{
    axios.post('http://localhost:5555/admin/film-type', formData)
    .then(response => {
        if(response){
            console.log(response)
            cb()
        }
    })
}

export {
    getListFilm,
    addFilmApi,
    deleteFilmApi,
    editFilmApi,
    addFilmType,
}