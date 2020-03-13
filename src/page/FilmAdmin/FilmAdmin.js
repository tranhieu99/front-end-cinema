import React from 'react';
import {Row,Col,Container} from 'reactstrap'
import FilmContainer from '../../containers/FilmContainer'
import Sidebar from '../../components/Admin/Sidebar'
const FilmAdmin = () => {
    return (
        <>
        <Row>
    <Col xs="3">
       <Sidebar />
    </Col>
    <Col xs="9">
        <Container>
        <h1 className = "mt-4 mb-4">Quản Lý Phim</h1>
            <FilmContainer />
        </Container>
    
        </Col>
        </Row>
        </>
    
    );
}

export default FilmAdmin;
