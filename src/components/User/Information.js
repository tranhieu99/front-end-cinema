import React,{useState} from 'react';
import {Row, Col, Form, FormGroup, Label,Input} from 'reactstrap'
// end
import Loading from '../Loading'
import Avatar from './DefaultAvatar'
import {uploadImageFile} from '../../user/api-user'
import Title from './Title'
import {withRouter} from 'react-router-dom'

const Information = ({user}) => {
const [state,setState] = useState({file: ""});
    return (
        <div className= "profile-information">
            <Title title="Thông tin người dùng" />
            {user.data.loading ? <Loading /> : 
            <div>
            <Row>
                <Col xs = "12" className="profile__avatar">
                <Avatar avatar = {state.file ? state.file : user.data.avatar ? user.data.avatar : false}/>
                </Col>
                <Col xs = "12" className="profile__form-avatar">
                <Form encType="multipart/form-data">
                    <FormGroup>
                        <Label for="avatar" >Chọn ảnh</Label>
                        <Input type="file" 
                               name="avatar" 
                               id="avatar" 
                               className="d-none"
                               placeholder="chọn file"
                               onChange = {(e) => {
                                   e.preventDefault();
                                   let fileName = e.target.files[0]
                                   const formData = new FormData();
                                   formData.append("user_name", user.data.user_name);
                                   formData.append("avatar", fileName);
                                   uploadImageFile(formData).then(res =>{
                                    const filePath = res.data.fileNameInSerVer
                                    setState({file: filePath})                                        
                                   })
                                } }
                               />
                    </FormGroup>
                </Form>
                </Col>
            </Row> 
            <Row>
            <Col md="6">
            <div className ="information__1">
                <p>
                    Tên:
                </p>
                <p>
                    {`${user.data.first_name} ${user.data.last_name} `}
                </p>
            </div>
            <div className ="information__1">
                <p>
                    Ngày Sinh: 
                </p>
                <p>
                    {user.data.birthday && `${user.data.birthday.slice(0,10)}`}
                </p>
            </div>
            <div className ="information__1">
                <p>
                    Thành Phố(Tỉnh): 
                </p>
                <p>
                    {`${user.data.city}`}
                </p>
            </div>
            <div className ="information__1">
                <p>
                    Địa chỉ: 
                </p>
                <p>
                {`${user.data.address}`}
                </p>
            </div>
            </Col> 
            <Col md="6">
            <div className ="information__1">
                <p>
                    Giới tính
                </p>
                <p>
                    {`${user.data.gender} `}
                </p>
            </div>
       
            <div className ="information__1">
                <p>
                    Số điện thoại: 
                </p>
                <p>
                    {`${user.data.phone_number}`}
                </p>
            </div>
               <div className ="information__1">
                <p>
                    Email: 
                </p>
                <p>
                {`${user.data.email}`}
                </p>
            </div>
            <div className ="information__1">
                <p>
                    Tên đăng nhập: 
                </p>
                <p>
                {`${user.data.user_name}`}
                </p>
            </div>
            </Col> 

            </Row> 
            </div>
            }

            
        </div>
    );
}

export default withRouter(Information);
