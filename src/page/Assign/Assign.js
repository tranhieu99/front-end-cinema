import React from 'react'
import {Row,Col,Container} from 'reactstrap'
import Sidebar from '../../components/Admin/Sidebar'
import AssignContainer from '../../containers/AssignContainer'
export default function Assign() {
    return (
        <>
        <Row>
    <Col xs="3">
       <Sidebar />
    </Col>
    <Col xs="9">
        <Container>
        <h1 className = "mt-4 mb-4">Quản Lý Lịch chiếu</h1>
        <AssignContainer />
        </Container>
    
        </Col>
        </Row>
        </>
    )
}
