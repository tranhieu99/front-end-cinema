import React,{useState,useEffect} from 'react';
import { Table,Button, PopoverHeader, PopoverBody,UncontrolledPopover, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../../style/movie.css'
import Loading from '../../Loading'
import  EditFormFilm from './EditFormFilm';
const ListFilm = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [state,setState] = useState({})

    const {
      buttonLabel,
      className
    } = props;
  
    const toggle = () => setPopoverOpen(!popoverOpen);
    const [modal, setModal] = useState(false);
const toggle3 = () =>{
  setModal(!modal)

}
  const toggle2 = (item) =>{
setState(item)

    setModal(!modal)
  } 

  const onHandleClick = (e)=> {
    e.preventDefault()
    const formData = new FormData();
    for(let [key,value] of Object.entries(state)){
      formData.append(key,value)
    }
    props.editFilmApi(formData,state);
    setModal(!modal) 
  }



    if(!props.film.length){
     return  <Loading />
    }

    return (

    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên Phim</th>
            <th> Đạo diễn </th>
            <th> Thể Loại </th>
            <th>Mô tả</th>
          <th>Poster</th>
          <th>Thao Tác</th>

        </tr>
      </thead>
      <tbody>
          {props.film.map((item,index) => {
               return(
               <tr key = {item.movie_id}>
               <th scope="row">{index + 1}</th>
               <td>{item.movie_name}</td>
               <td>{item.movie_director}</td>
               <td>{item.type_name}</td>
               <td><Button outline color="info" id= {`${item.movie_id}`} type="button">

        Xem
      </Button>   {' '}
      <UncontrolledPopover trigger="focus"  placement="left"  target = {`${item.movie_id}`}>
        <PopoverHeader>{item.movie_name}</PopoverHeader>
        <PopoverBody>{item.movie_describe}</PopoverBody>
      </UncontrolledPopover></td>
               <td> <img src= {item.movie_image} alt = {item.movie_name} width = "120" /> </td>
                <td style = {{display:"flex"}}>     
                
                <Button color="primary" className ="mr-2" onClick={() => toggle2(item)}> Sửa </Button>
     
      <Button outline color="danger" onClick = {() => props.deleteFilmApi(item.movie_id)}>Xoá</Button> </td>
             </tr>
             )
          })}
           <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}> Sửa phim </ModalHeader>
        <ModalBody>
<EditFormFilm state = {state} setState = {setState}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ onHandleClick }>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle3}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </tbody>
    </Table>

    );
}



export default ListFilm;
