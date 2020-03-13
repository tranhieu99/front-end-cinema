import React, { useState,useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import {UserPackage} from '../contextapi/UserContext'
import auth from '../auth/api-helper'
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
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/">Cinema</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
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
            </NavItem>) }

            {auth.isAutheticate() && (<NavItem>
            <Button onClick = {() => auth.signout(() => history.push("/")) }>Đăng xuất</Button>
            </NavItem>) }
          
          </Nav>
          { auth.isAutheticate() && (   <p className="float-right"> 
                Xin chào  <Link to = {`/Profile/${user.data.user_name}`} >{user.data.last_name}</Link>
            </p>) }
        </Collapse>
      </Navbar>
    </div>
  );
})

export default NavbarMenu;
