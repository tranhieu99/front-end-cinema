import {combineReducers} from 'redux' 
import {filmReducer } from './FilmReducer'
const myReducer = combineReducers({filmReducer});

export default myReducer;