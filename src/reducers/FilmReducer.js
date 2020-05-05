import * as types from '../constant/constant'
const initialState = []
const filmReducer = (state=initialState, action) => {
switch(action.type){
    case types.GET_FILM_ADMIN:
        return action.payload
    case types.ADD_FILM_ADMIN:
        return [action.payload, ...state]
    case types.DELETE_FILM_ADMIN:
        return state.filter(movie => movie.movie_id !== action.payload)
    case types.ITEM_EDITING:
         return (state.map(item =>{
            if(item.movie_id == action.payload.movie_id){
                return {...item, ...action.payload}
            }
            else return item
        }))
    default: return state
}

}

export {
    filmReducer
}