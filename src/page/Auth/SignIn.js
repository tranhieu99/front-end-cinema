import React from "react";
import {Container,Row,Col} from 'reactstrap'
import AfterMenu from '../../components/SignIn/AfterMenu'
import '../../style/auth.css'
import FormInput from '../../components/SignIn/FormSignIn'
export default function SignIn(){
return (
    <Container>
        <Row>
            <Col xs = "6">
            <AfterMenu isActive = {true}/>
            </Col>
        </Row>
        <Row>
            <Col xs="6">
            <FormInput />
            </Col>

        </Row>
    </Container>
    );

}