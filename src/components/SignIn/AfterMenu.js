import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import {isActive} from '../../helper/Active'
const AfterMenu = withRouter(({history})=>{
return(
<div className="after-menu-signin">
    <Link to ="/signin" className = {isActive(history, "/signin", "isSignInActive", "isNotSignInActive" )}> Đăng nhập</Link>
    <Link to ="/signup" className = {isActive(history, "/signup", "isSignInActive", "isNotSignInActive")}> Đăng ký</Link>
</div>
);
})

export default AfterMenu