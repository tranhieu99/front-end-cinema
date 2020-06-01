import React, { useState,useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Row,
  Col,
  Container
} from 'reactstrap';
import logo from '../img/logo.png'
import lc from '../img/lc.png'
import fb_logo from '../img/fb_logo.png'
import mvtr from '../img/mvtr.png'
import movie_365 from '../img/movie-365.png'
import member from '../img/bhdstar-member.png'

import {UserPackage} from '../contextapi/UserContext'
import auth from '../auth/api-helper'
import '../style/nav-bar.css'
import {Link, withRouter} from 'react-router-dom'
const NavbarMenu = withRouter(({ history, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = useContext(UserPackage);
if(history.location.pathname.includes("/admin")){
  return <> </>
}
  return (
    <div className = "nav-wrapper">
      <Navbar color="dark" light expand="md" className = "nav-bar-main">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Container>
            <Row style = {{width: '100%'}}>
              <Col md = {4} className ="header-main-left">
                <ul className = "header-main-left__list d-flex justify-content-around align-items-center">
                  <li> <a href = "#"><img src = {fb_logo } /></a> </li>
                  <li> <a href = "#"><img src={lc} /></a> </li>
                  <li> <a href = "#"><img src = {mvtr} /> </a> </li>
                  </ul>
              </Col>
              <Col md = {4} className = "header-main-middle">
           
                 </Col>
              <Col md = {4} className = "header-main-right">
              <ul className = "header-main-right__list d-flex justify-content-around">
              <li> <a href = "#"><img src = {movie_365}  /></a> </li>
                  <li> <Link to = {`/Profile/${user.data.user_name}`}><img src={member} /></Link> </li>
                  </ul> 
              </Col>
            </Row>
            </Container>
            {/* <div class="profile-user"> 
            
            { auth.isAutheticate() && (   <p className="float-right"> 
              <p>Xin chào</p>    
            </p>) }</div> */}
            <div className = "sign-in-nav">
            { !auth.isAutheticate() && (   <NavItem>
            <Link to="/signin">Đăng nhập</Link>
            </NavItem>) }
           
            {
            
            auth.isAutheticate() && (<NavItem>
            <Button onClick = {() => auth.signout(() => history.push("/")) }>Đăng xuất</Button>
            </NavItem>) }
            </div>
{/*       <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
            <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
            <Link to="/users">Users</Link>
            </NavItem>
            { !auth.isAutheticate() && (   <NavItem>
            <Link to="/signin">Đăng nhập</Link>
            </NavItem>) } */}

            {/* {auth.isAutheticate() && (<NavItem>
            <Button onClick = {() => auth.signout(() => history.push("/")) }>Đăng xuất</Button>
            </NavItem>) }
           */}
          {/* { auth.isAutheticate() && (   <p className="float-right"> 
                Xin chào  <Link to = {`/Profile/${user.data.user_name}`} >{user.data.last_name}</Link>
            </p>) } */}
        </Collapse>
        <ul className = "header-main-middle__list d-flex justify-content-center">
                  {/* <li className ="d-flex"> <p>VI</p> | <p>EN</p></li> */}
                  <li> <Link to = "/"><img src = {logo} /></Link>         <img alt="" class="line-header" src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/line-header1.png" /> </li>
                  {/* <li> <a href = "#"><i class ="fa fa-phone"></i> 19001000</a> </li> */}
              </ul> 
      </Navbar>
    </div>
  );
})

export default NavbarMenu;
