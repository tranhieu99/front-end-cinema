import * as types from '../constant/constant'

export const getFilms = (data) =>{
    return {
        type: types.GET_FILM_ADMIN,
        payload:data
    }
}

export const addFilm = (data) =>{
    return{
        type: types.ADD_FILM_ADMIN,
        payload: data
    }
}

export const deleteFilm = (movie_id) => {
    return{
        type: types.DELETE_FILM_ADMIN,
        payload:movie_id
    }
}