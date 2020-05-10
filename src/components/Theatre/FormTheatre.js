import React, {useState,useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function FormTheatre({handleAddTheatre,itemEdit, onHandleEdit}) {
    const [state,setState] = useState({
        'theatre_name': "",
        'theatre_seat':""
    })
    useEffect(()=>{
        setState({...itemEdit})
    },[itemEdit]);
   const onHandleChange = (e) => {
       e.preventDefault();
       const name = e.target.name;
        setState({
            ...state,
            [name]: e.target.value
        })
    }
   const onHandleSubmit = (e) =>{
       if(!state.theatre_id){
        handleAddTheatre(state);    
       }
       else {
        onHandleEdit(state);
       }
   } 
   const onClearForm = (e) => {
       setState({
        'theatre_name': "",
        'theatre_seat':""
       })
   }
    return (
        <div>
         {!state.theatre_id ? <p> Chế độ thêm </p> : <p>Sửa phòng chiếu {state.theatre_name}</p>}   
              <Form>
      <FormGroup>
        <Input type="text" value = {state.theatre_name} name="theatre_name" id="theatre_name" onChange={onHandleChange} placeholder="Nhập tên phòng chiếu" />
      </FormGroup>
      <FormGroup>
        <Input type="number" value = {state.theatre_seat} name="theatre_seat" onChange={onHandleChange} id="theatre_seat" placeholder="Nhập số ghế" />
      </FormGroup>
      <Button type ="button"  color = "primary" onClick ={onHandleSubmit}> Xác nhận  </Button>
      {
       
   state.theatre_id
   ? <Button type ="button" className = "ml-3" onClick = {onClearForm} color = "primary" > Chuyển sang chế độ thêm  </Button>
   : ""
    }
      

    </Form>
        </div>
    )
}
