import {get} from 'axios'
import {getFilms } from '../actions/index'
const getListFilm = () => (dispatch)=> {
get('http://localhost:5555/admin/film').then(response => {
console.log(response)
    dispatch(getFilms(response.data))
}).catch(err => {
    console.log(err)
})
}
export {
    getListFilm
}