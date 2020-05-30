import React,{useState} from 'react'
import { Button, Form, FormGroup,Row,Col, Label, Input,InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import auth from './../../auth/api-helper'
import {signin} from './../../auth/api-auth'
import {Redirect} from 'react-router-dom'

export default function FormInput(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [redirect, setRedirect] = useState(false);



    const onHandleSubmit = () =>{
      const user = {
        user_name: username,
        pass_word:password
      }
      signin(user).then(data =>{
        console.log(data)
        if(data.error){
          setErr(data.error)
        }
        else{
          auth.autheticate(data,()=>{
            localStorage.setItem("json_token", data.token)
            localStorage.setItem("role", data.role)
            localStorage.setItem("first_name", data.first_name)
            localStorage.setItem("last_name", data.last_name)
            localStorage.setItem("user_id", data.user_id)
            localStorage.setItem("email", data.email)
            setRedirect(true);
          })
        }
      })
    }
    if(redirect){
      return (<Redirect to= "/"/>)

    }
    return(
      
        <div className="sign-in-form mt-5">
            <Row>
            <Col xs ="1">
</Col>
            <Col xs ="6">

        <Form >
        <FormGroup>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input type="text" name="username" id="username" placeholder="Input your username" value = {username} onChange = {e => setUsername(e.target.value)} required />
      </InputGroup>

        </FormGroup>
        <FormGroup>
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input type="password" name="password" id="password" placeholder="Input your password" value = {password} onChange = {e => setPassword(e.target.value)  } required />
      </InputGroup>
    {err && <p> {err}</p>}
        </FormGroup>
        </Form>
        </Col>
    <Col xs ="4" className ="d-flex justify-content-center align-items-center">
    <Button onClick = {onHandleSubmit}>Submit</Button>
    </Col>
    </Row>
    </div>
    )
}