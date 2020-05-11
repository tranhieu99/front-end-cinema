import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getAssignApi,addAssignApi} from '../api/assign-api'
import AssignList from '../components/Admin/Assign/AssignList'
import ModalFormAssign from '../components/Admin/Assign/ModalFormAssign'

 function AssignContainer(props) {
     useEffect(() => {
        props.getAssignApi();
     },[])
    return (
        <>
        <ModalFormAssign addAssign = {props.addAssignApi} buttonLabel = "Thêm lịch chiếu"/>
        <AssignList assign = {props.assign}/>
        </>
    )
}
const mapStateToProps = (state) =>{
return {
    assign: state.assign
}
}
export default connect(mapStateToProps, {getAssignApi,addAssignApi})(AssignContainer)