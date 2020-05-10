import * as types from '../constant/constant'
const initialState = []
const TheatreReducer = (state=initialState, action) => {
switch(action.type){
    case types.GET_THEATRES:
        return action.payload
    case types.ADD_A_THEATRE:   
        return [
            action.payload,
            ...state
        ]
    case types.DELETE_THEATRE:
        return state.filter(item => item.theatre_id !== action.payload)
    case types.UPDATE_THEATRE:
        return state.map(item => {
            if(item.theatre_id === action.payload.theatre_id){
                return {...item, ...action.payload }
            }
            else return item
        })
    default: return state
}

}

export {
    TheatreReducer
}