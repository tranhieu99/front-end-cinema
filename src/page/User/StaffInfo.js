import React, {useState,useEffect} from 'react';

import Sidebar from '../../components/Admin/Sidebar'
import {getStaff} from '../../user/api-admin'

import TableStaff from '../../components/Admin/StaffInfo/Table'
import { Row,Col,Container } from 'reactstrap';
import {deleteStaff} from '../../user/api-admin'

const StaffInfo = (props) => {
  const [state,setState] = useState([]);

    useEffect(() =>{
        getStaff().then(data =>{
            setState(data)
        })
    }, [])
  const onHandleClick = (index, e) =>{
    const newState = state.filter(item => item.user_id !== e.target.value )
    deleteStaff(e.target.value).then(data => {
      console.log(data);
    })
    setState(newState)
 }
  return (
    <>
    <Row>
<Col xs="3">
   <Sidebar />
</Col>
<Col xs="9">
    <Container>
    <h1 className = "mt-4 mb-4">Quản Lý Nhân Viên</h1>

<TableStaff staffList = {state} onHandleClick = {onHandleClick}/>
    </Container>

    </Col>
    </Row>
    </>
    
  );
}

export default StaffInfo;
