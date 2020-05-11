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
export const editFilm = (film) => {
    return{
        type: types.ITEM_EDITING,
        payload: film
    }
}

//

export const getTheatre = (data) =>{
    return{
        type: types.GET_THEATRES,
        payload:data
    }
}
export const addTheatre = (data) => {
    return{
        type:types.ADD_A_THEATRE,
        payload:data
    }
}
export const getSingleTheatre = (data) =>{ 
    return{
        type:types.GET_THEATRE,
        payload: data
    }
}
export const deleteTheatreAction = (id) =>{
    return{
        type: types.DELETE_THEATRE,
        payload:id
    }
}

export const updateTheatreAction = (id) =>{
    return{
        type: types.UPDATE_THEATRE,
        payload: id
    }
}

//

export const getAssignAction = (data) =>{
    return {
        type: types.GET_ASSIGN,
        payload:data
    }
}

export const addAssignAction = (data) =>{
    return{
        type:types.ADD_ASSIGN,
        payload:data
    }
}