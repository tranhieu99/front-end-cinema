import {combineReducers} from 'redux' 
import {filmReducer } from './FilmReducer'
import {TheatreReducer as theatre} from './TheatreReducer'
import {UpdateReducer as item} from './UpdateReducer'
import {AssignReducer} from './AssignReducer'
const myReducer = combineReducers({filmReducer, theatre,item, assign: AssignReducer});

export default myReducer;