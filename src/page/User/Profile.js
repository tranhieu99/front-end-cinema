import React,{useContext} from 'react'
import {withRouter,Redirect} from 'react-router-dom'
import Information from '../../components/User/Information'
import {Container, Row, Col} from 'reactstrap'
// internal
import auth from '../../auth/api-helper'
import {getUser} from '../../user/api-user'
import {UserPackage} from '../../contextapi/UserContext'
import SideBar from '../../components/User/sidebar'
import Edit from '../../components/User/Edit'
import '../../style/user.css'

 function Profile({match, ...props}) {
    const userToken = localStorage.getItem("json_token");
    const decoded = auth.checkUser(userToken);
    let user = useContext(UserPackage);
    if(!userToken){
        return(
            <Redirect to = "/signin" />
        )
    }
    if(decoded.payload.data.username != match.params.username){
        return(
            <Redirect to = "/" />
        )
    }
    return (
        <Container> 
            <Row> 
                <Col md = "3">
                    <SideBar user = {user}/>
                </Col>
                <Col md="9"> 
                {props.location.pathname == `/Profile/${match.params.username}` && <Information user = {user} />}
                {props.location.pathname == `/Profile/edit/${match.params.username}` && <Edit user = {user} />}

                </Col>
            </Row>
        </Container>
    )
}

export default withRouter(Profile)