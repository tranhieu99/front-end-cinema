import axios from 'axios'
import {getAssignAction,addAssignAction} from '../actions/index'
import { IdOrName} from '../helper/IdOrName'
const getAssignApi = () => dispatch =>{ 
    axios({
        method: 'get',
        url: 'http://localhost:5555/admin/assign'
    }).then((response) => {
        dispatch(getAssignAction(response.data))
    })
    .catch(err => {
        console.log(err)
    })
}
const addAssignApi = (data) => dispatch =>{ 
    const dataToAdd = { 
        movie_show_date: data.movie_show_date,
    movie_id: IdOrName(`${data.movie_id}`,0),
    show_time_id: IdOrName(`${data.show_time_id}`,0),
    theatre_id: IdOrName(`${data.theatre_id}`,0),
}
  
    axios({
        method: 'post',
        url: 'http://localhost:5555/admin/assign',
        data: dataToAdd
    }).then((response) => {
        dispatch(addAssignAction(data))
    })
    .catch(err => {
        console.log(err)
    })
}
export {
    getAssignApi,
    addAssignApi
}