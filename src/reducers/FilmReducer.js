import * as types from '../constant/constant'
const initialState = []
const filmReducer = (state=initialState, action) => {
switch(action.type){
    case types.GET_FILM_ADMIN:
        return action.payload
    default: return state
}
}

export {
    filmReducer
}