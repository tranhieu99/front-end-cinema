import React from 'react';
import {Row,Col,Container} from 'reactstrap'
import Sidebar from '../../components/Admin/Sidebar'
import TheatreContainer from '../../containers/TheatreContainer'
const Theatre = () => {
    return (
        <>
        <Row>
    <Col xs="3">
       <Sidebar />
    </Col>
    <Col xs="9">
        <Container>
        <h1 className = "mt-4 mb-4">Quản Lý Phòng Chiếu</h1>
        <TheatreContainer />
        </Container>
    
        </Col>
        </Row>
        </>
    
    );
}

export default Theatre;
