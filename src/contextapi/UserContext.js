import React, {useState,useEffect} from 'react'
import PackageContext from './context'
import {getUser} from '../user/api-user'

import auth from '../auth/api-helper'
const UserPackage = PackageContext
const UserContext = props => {
    const [state,setState] = useState({loading:true})
    const userToken = localStorage.getItem("json_token");
    const decoded = auth.checkUser(userToken);
        useEffect(()=>{
            if(decoded){
                getUser(decoded.payload.data.username).then((data)=>{
                    if(data){
                        setState(Object.assign({}, data[0], {loading:false}));
                    }
                    else{
                        console.log("error");
                    }
                })
            }
          
        },[]);
    
  
    const updateDataUser = (key,value) =>{
        setState({
            [key]: value,
            ...state
        })
    }
    return (
     <UserPackage.Provider
     value = {{
         data:state,
         updateDataUser : updateDataUser
     }}
     >
         {props.children}
     </UserPackage.Provider>
    );
}
const UserProvider = PackageContext.Provider

const UserConsumer = PackageContext.Consumer

export {
    UserConsumer,
    UserProvider,
    UserPackage
}
export default UserContext;
