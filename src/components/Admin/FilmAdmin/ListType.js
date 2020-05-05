import React, {useEffect,useState} from 'react';
import { Table } from 'reactstrap';
import {get} from 'axios'
const ListType = (props) => {
    const [type,setType] = useState([])
    useEffect(() =>{
        get('http://localhost:5555/admin/film-type').then(response =>{
           setType(response.data)
        })
      }, [])
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Mã thể loại </th>
          <th>Tên thể loại</th>
        </tr>
      </thead>
      <tbody>

      {type.map((item,index) => {
          return(
            <tr key = {item.type_id}>
            <th scope="row">{index + 1}</th>
            <td>{item.type_id}</td>
            <td>{item.type_name}</td>
          </tr>
          )
      })}
      </tbody>
    </Table>
  );
}

export default ListType;
