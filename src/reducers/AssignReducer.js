import * as types from '../constant/constant'
import {IdOrName} from '../helper/IdOrName'
const initialState = []
const AssignReducer = (state=initialState, action) => {
switch(action.type){
    case types.GET_ASSIGN:
        return action.payload
    case types.ADD_ASSIGN:
        let dataToAdd = {
            movie_name: IdOrName(`${action.payload.movie_id}`, 1),
            theatre_name:IdOrName(`${action.payload.theatre_id}`, 1),
            time: IdOrName(`${action.payload.show_time_id}`, 1),
            movie_show_date: action.payload.movie_show_date
        }
        return [...state,dataToAdd]
    case types.DELETE_ASSIGN:
        return state.filter(item => item.movie_show_id !== action.payload)
    default: return state
}

}

export {
    AssignReducer
}