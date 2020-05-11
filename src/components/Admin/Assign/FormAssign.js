import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export default function FormAssign({formData,setFormData}) {
    const [queryResult, setQueryResult] = useState({
        movieName: [],
        theatreName: [],
        time: []
    })
    useEffect( () =>{
        axios({
            method: 'get',
            url: 'http://localhost:5555/admin/assign/query'
        }).then(response => {
            setQueryResult({
                ...queryResult,
                movieName: response.data.movieName,
                theatreName: response.data.theatreName,
                time: response.data.time
            })
        })
    },[])
    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <>
              <Form>
      <FormGroup>
        <Label for="movie_show_date">Ngày chiếu</Label>
        <Input type="date" onChange = {handleChange} name="movie_show_date" id="movie_show_date"  />
      </FormGroup>
      <FormGroup >
        <Label for="movie_id" >Chọn phim</Label>
          <Input type="select" onChange = {handleChange} name="movie_id" id="movie_id">
              <option disabled selected> Select one </option>
              {queryResult.movieName.map((item,index) => {
            return(
            <option key = {index} 
            value = {`${item.movie_id}__${item.movie_name}`}>
                {item.movie_name}
            </option>
                )
              })}
        
          </Input>
      </FormGroup>
      <FormGroup >
        <Label for="show_time_id" >Chọn giờ chiếu</Label>
          <Input type="select" onChange = {handleChange} name="show_time_id" id="show_time_id">
          <option disabled selected> Select one </option>
              {queryResult.time.map((item,index) => {
            return(
            <option key = {index} 
            value = {`${item.show_time_id}__${item.time}`}>
                {item.time}
            </option>
                )
              })}
        
          </Input>
      </FormGroup>
      <FormGroup >
        <Label for="theatre_id" >Chọn phòng chiếu</Label>
          <Input type="select" onChange = {handleChange} name="theatre_id" id="theatre_id">
          <option disabled selected> Select one </option>
              {queryResult.theatreName.map((item,index) => {
            return(
            <option key = {index} 
            value = {`${item.theatre_id}__${item.theatre_name}`}>
                {item.theatre_name}
            </option>
                )
              })}
        
          </Input>
      </FormGroup>


</Form>  
        </>
    )
}