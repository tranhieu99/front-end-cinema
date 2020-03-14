import React,{useContext} from 'react';
import {UserPackage} from '../../contextapi/UserContext'
import {Redirect} from 'react-router-dom'
  
import {Col,Row} from 'reactstrap'
import  '../../style/admin.css'
import SideBar from '../../components/Admin/Sidebar'


const Admin = () => {
    const user = useContext(UserPackage);
    const role = localStorage.getItem("role");

    if(role=="GUEST" || !role){
        return <Redirect to ="/" />
    }
    return (
        <>
     <Row>
         <Col xs="6">
            <SideBar user = {user}/>
         </Col>
     </Row>

        </>
    );
}

export default Admin;
