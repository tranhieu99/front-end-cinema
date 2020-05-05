
/*  Trung Hieu Tran
    12/3/2020
*/

import React, {useEffect,useState} from 'react';
import {get} from 'axios'
import {FormGroup,FormText, Label, Input } from 'reactstrap';

const EditFormFilm = (props) => {
useEffect(() =>{
  get('http://localhost:5555/admin/film-type').then(response =>{
     setType(response.data)
  })
}, [])
  const [type,setType] = useState([])
  const handleChange = (e) =>{
      e.preventDefault();
      props.setState({
        ...props.state,
        [e.target.name] : e.target.value
      })
  }
  

  return (
      <div className = "add-film-form">
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="fim-name" className="mr-sm-2">Tên Phim</Label>
        <Input type="text" name="movie_name" value = {props.state.movie_name} id="fim-name" onChange = {handleChange} />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="director" className="mr-sm-2">Đạo diễn</Label>
        <Input type="text" value = {props.state.movie_director}  name="movie_director" id="director" onChange = {handleChange} />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="film-type">Thể Loại</Label>
        <Input type="select"  name="movie_type"  defaultValue={props.state.type_id} id="film-type" onChange = {handleChange} >
        <option value= {props.state.type_id} key ="default" disabled>{props.state.type_name} </option>

      {type.map(item => {
        return (
          <option key = {item.type_id} > {item.type_name} </option>
        )
      })}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="film-image">File</Label>
        <Input type="file" name="movie_image" id="film-image" onChange = {(e) => { props.setState({ ...props.state, [e.target.name] : e.target.files[0] })}}/>
        <FormText color="muted">
          Mởi chọn ảnh
        </FormText>
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="film-trailer" className="mr-sm-2">Trailer phim (link Youtube)</Label>
        <Input type="text" value = {props.state.movie_trailer}  name="movie_trailer" id="film-trailer" onChange = {handleChange}/>
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
      <Label for="film-des">Miêu tả phim</Label>
        <Input type="textarea" name="movie_describe" value = {props.state.movie_describe}  id="film-des" onChange = {handleChange}/>
      </FormGroup>
      </div>
  );
}

export default EditFormFilm;
