import * as types from '../constant/constant'
const initialState = []
const filmReducer = (state=initialState, action) => {
switch(action.type){
    case types.GET_FILM_ADMIN:
        return action.payload
    case types.ADD_FILM_ADMIN:
        return [action.payload, ...state]
    case types.DELETE_FILM_ADMIN:
        console.log(action)
        return state.filter(movie => movie.movie_id !== action.payload)
    default: return state
}

}

export {
    filmReducer
}