import * as types from '../constant/constant.js'

const initialState = []

const UpdateReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.GET_THEATRE:
            return action.payload
        case types.GET_UPDATE_ASSIGN:
            console.log(action)
            return action.payload
        default: return state
    }
}
export  {UpdateReducer};