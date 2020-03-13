import * as types from '../constant/constant'

export const getFilms = (data) =>{
    return {
        type: types.GET_FILM_ADMIN,
        payload:data
    }
}