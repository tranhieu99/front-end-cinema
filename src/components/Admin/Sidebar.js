import React,{useState,useContext} from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {UserPackage} from '../../contextapi/UserContext'

import {Link} from 'react-router-dom'

export default function Sidebar() {
    const [dropdownOpen, setOpen] = useState(false);
const toggle = () => setOpen(!dropdownOpen);
const user = useContext(UserPackage);

    return (
        <div className = "vertical-nav bg-white" id="sidebar">
        <div className = "py-4 px-3 mb-4 bg-light">
          <div className = "media d-flex align-items-center"><img src={user.data.avatar} alt="..." width="65" style={{'height': '65px'}} className = "mr-3 rounded-circle img-thumbnail shadow-sm" />
            <div className = "media-body">
                
    {!user.data.loading && <h4 className = "m-0">{`${user.data.first_name} ${user.data.last_name}`}</h4> }
              <p className = "font-weight-light text-muted mb-0">{user.data.role}</p>
            </div>
          </div>
        </div>
      
        <p className = "text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>
      
        <ul className = "nav flex-column bg-white mb-0">
          <li className = "nav-item">
            <Link to="/" className = "nav-link text-dark font-italic bg-light">
                      <i className = "fa fa-th-large mr-3 text-primary fa-fw"></i>
                      Home
                  </Link>
          </li>
          <li className = "nav-item">
            <a href="#" className = "nav-link text-dark font-italic">
                  </a>
                  <ButtonDropdown direction="right"  isOpen={dropdownOpen} onClick = {toggle}>
  <DropdownToggle className = "nav-link text-dark font-italic btn-white" color = "white" >
  <i className = "fa fa-address-card mr-3 text-primary fa-fw" ></i>
  Staff Managerment

  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem><Link to = "/admin/staff-info"> <i className = "fa fa-info-circle text-primary fa-fw"></i> Staff information </Link> </DropdownItem>
    <DropdownItem divider/>

    <DropdownItem><Link to = "/admin/add-staff"> <i className = "fa fa-user-plus text-primary fa-fw"></i> Add Staff </Link> </DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

          </li>
          


          <li className = "nav-item">
            <Link to="/admin/admin-film" className = "nav-link text-dark font-italic">
                      <i className = "fa fa-film mr-3 text-primary fa-fw"></i>
                      Quản lý phim
                  </Link>
          </li>
          <li className = "nav-item">
            <a href="#" className = "nav-link text-dark font-italic">
                      <i className = "fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      Gallery
                  </a>
          </li>
        </ul>
      
        <p className = "text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>
      
        <ul className = "nav flex-column bg-white mb-0">
          <li className = "nav-item">
            <a href="#" className = "nav-link text-dark font-italic">
                      <i className = "fa fa-area-chart mr-3 text-primary fa-fw"></i>
                      Area charts
                  </a>
          </li>
          <li className = "nav-item">
            <a href="#" className = "nav-link text-dark font-italic">
                      <i className = "fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                      Bar charts
                  </a>
          </li>
          <li className = "nav-item">
            <a href="#" className = "nav-link text-dark font-italic">
                      <i className = "fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                      Pie charts
                  </a>
          </li>
          <li className = "nav-item">
            <a href="#" className = "nav-link text-dark font-italic">
                      <i className = "fa fa-line-chart mr-3 text-primary fa-fw"></i>
                      Line charts
                  </a>
          </li>
        </ul>
      </div>
      
      

    )
}
