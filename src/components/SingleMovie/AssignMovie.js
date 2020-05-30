import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, Container, Label, FormGroup } from 'reactstrap'
export default function AssignMovie({movie_id,buttonLabel,className}) {
const [assign,setAssign] = useState([])
const [formData, setFormData] = 
useState({first_name: localStorage.getItem('first_name') ,
     last_name: localStorage.getItem("last_name") , 
     email: localStorage.getItem('email'),
     user_id: localStorage.getItem('user_id'),
     phone_number:"",
     quantity: "",
    movie_show_id: ""    
    })
    useEffect(() =>{ 
    axios.get(`http://localhost:5555/assign/${movie_id}`).then((response) =>{
        setAssign(response.data)
    })
}, [movie_id])
const handleSubmit = (cb) => {
    axios.post("http://localhost:5555/bill", formData).then((response) =>{
        console.log(response);
    })
    cb()
}
const HandleClick = (movie_show_id,cb) =>{
setFormData({
    ...formData,
    movie_show_id
})
cb();
}
const handleChange = (e) =>{
    e.preventDefault();
const {value} = e.target
const {name} = e.target
setFormData({
    ...formData,
    [name]:value
})
}
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

    return (
        <div className ="assign-in-single">
            <h1>Lịch chiếu</h1>
            
            <div className = "assign-in-single__detail">
               {assign && assign.map((item) =>{
                   return(
                    <div key = {item.movie_show_id} className ="detail">
                        <div className = "detail__theatre">
                            <h4> {item.theatre_name}</h4>
                            <p> Mã phòng chiếu: {item.theatre_id} </p>
                            <p> Số ghế: {item.theatre_seat} </p>
                        </div>
                        <div class="detail__date"> 
                          <p>  {
                            `${new Date(`${item.movie_show_date}`).getDate()} - ${new Date(`${item.movie_show_date}`).getMonth()} -${new Date(`${item.movie_show_date}`).getFullYear()} `  
                            }
                          </p>
                            <p>
                            {
                                item.time
                            }
                            <br />
                            <Button color="success" onClick={(e) => HandleClick(item.movie_show_id,toggle)}>Đặt vé</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Thông tin đặt vé</ModalHeader>
        <ModalBody>
            <Container className ="pb-2 pt-2">
            <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="first_name" className="mr-sm-2">First Name</Label>
        <Input   type="text" name="first_name" value = {formData.first_name} id="first_name" onChange = {handleChange} />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="last_name" className="mr-sm-2">Last Name</Label>
        <Input onChange = {handleChange} type="text" name="last_name" value = {formData.last_name} id="last_name"  />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="email" className="mr-sm-2">Địa chỉ Email</Label>
        <Input onChange = {handleChange} type="email" name="email" value = {formData.email} id="email"  />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="phone_number" className="mr-sm-2">Số điện thoại</Label>
        <Input onChange = {handleChange}  type="phone_number" name="phone_number" value = {localStorage.getItem('phone_number')} id="phone_number"  />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
      <Label for="quantity" className="mr-sm-2">Số lượng</Label>

        <Input onChange = {handleChange} type="number" name="quantity"  id="quantity"  />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Input onChange = {handleChange} type="hidden" name="movie_show_id" value = {item.movie_show_id} id="movie_show_id"  />
      </FormGroup>
      
        </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => handleSubmit(toggle)}>Xác nhận</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
                            </p>
                           
                        </div>
                    </div>
                   )
                  
               })}
            </div>
        </div>
    )
}
