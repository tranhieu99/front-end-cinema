import React,{useEffect} from 'react'
import {getListTheatre,
    addTheatreApi,
    getSingleTheatreApi,
    deleteTheatreApi,
    updateTheatreApi } from '../api/theatre-api'
import {connect} from 'react-redux'

import ListTheatre from '../components/Theatre/ListTheatre'
import FormTheatre from '../components/Theatre/FormTheatre'
 function TheatreContainer(props) {
     useEffect(() => {
        props.getListTheatre();
     } , [])
    return (
        <div>
            <div class="row">
                <div class="col-md-6">
                <ListTheatre  onEditClick = {props.getSingleTheatreApi} handleDeleteTheatre = {props.deleteTheatreApi} theatre = {props.theatre}/>
                </div>
                <div class="col-md-6">
                    <FormTheatre onHandleEdit = {props.updateTheatreApi} itemEdit = {props.itemEdit} handleAddTheatre = {props.addTheatreApi}/>
                </div>  
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        theatre: state.theatre,
        itemEdit: state.item

    }
}
export default connect(mapStateToProps, {getListTheatre, addTheatreApi, deleteTheatreApi, getSingleTheatreApi,updateTheatreApi})(TheatreContainer)