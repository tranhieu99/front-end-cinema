import React from 'react';
import {Link} from 'react-router-dom'

const sidebar = ({user}) => {
    return (
        <ul>
            <li className="sidebar-item"><Link to = {`/Profile/${user.data.user_name}`}>Thông tin tài khoản</Link></li> 
            <li className="sidebar-item"><Link to = {`/Profile/edit/${user.data.user_name}`}>Sửa thông tin tài khoản</Link></li> 
        </ul>
    );
};



export default sidebar;
