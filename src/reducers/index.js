import {combineReducers} from 'redux' 
import {filmReducer } from './FilmReducer'
import {TheatreReducer as theatre} from './TheatreReducer'
import {UpdateReducer as item} from './UpdateReducer'
const myReducer = combineReducers({filmReducer, theatre,item});

export default myReducer;