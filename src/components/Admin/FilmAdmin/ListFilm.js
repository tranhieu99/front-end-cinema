import React,{useState} from 'react';
import { Table,Button, PopoverHeader, PopoverBody,UncontrolledPopover } from 'reactstrap';
import '../../../style/movie.css'
import Loading from '../../Loading'
const ListFilm = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
  
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
                <td style = {{display:"flex"}}>      <Button outline className="mr-2" color="info">Sửa</Button>
      <Button outline color="danger" onClick = {() => props.deleteFilmApi(item.movie_id)}>Xoá</Button> </td>
             </tr>
             )
          })}
      </tbody>
    </Table>

    );
}



export default ListFilm;
