import axios from 'axios';
import {getTheatre,
    addTheatre,
    getSingleTheatre,
    updateTheatreAction
    ,
    deleteTheatreAction} from  '../actions/index'
const getListTheatre =  () => (dispatch) =>{
    axios({
        method: 'get' ,
        url: 'http://localhost:5555/admin/theatre',
      }).then(response => {
            dispatch(getTheatre(response.data));
      }).catch(err =>{
          console.log(err);
      });
}
const addTheatreApi = (data) => (dispatch) => {
    axios({
        method: 'post' ,
        url: 'http://localhost:5555/admin/theatre',
        data: data
      }).then(response => {
            dispatch(addTheatre(response.data));
      }).catch(err =>{
          console.log(err);
      });
}
const deleteTheatreApi = (data) => dispatch =>{
    axios({
        method: 'delete',
        url: 'http://localhost:5555/admin/theatre',
        data: data
    }).then(response =>{
        dispatch(deleteTheatreAction(data.id))
    }).catch(err =>{
        console.log(err)
    })
}
const getSingleTheatreApi = (id) => dispatch => {
    axios({
        method: 'get',
        url: `http://localhost:5555/admin/theatre/${id}`
    }).then(response => {
        dispatch(getSingleTheatre(response.data))
    }).catch(err => console.log(err)) 
}
const updateTheatreApi = (data) => dispatch => {
    axios({
        method: 'put',
        url: `http://localhost:5555/admin/theatre/${data.theatre_id}`,
        data: data
    }).then(response =>{
        dispatch(updateTheatreAction(data));
    }).catch(err => console.log(err))
}
export {
    getListTheatre,
    addTheatreApi,
    deleteTheatreApi,
    getSingleTheatreApi,
    updateTheatreApi
}