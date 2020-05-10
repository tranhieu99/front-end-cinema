import * as types from '../constant/constant.js'

const initialState = []

const UpdateReducer = (state = initialState, action) =>{
    switch (action.type){
        case types.GET_THEATRE:
            return action.payload
        default: return state
    }
}
export  {UpdateReducer};