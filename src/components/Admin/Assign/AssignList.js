import React from 'react'
import { Table,Button } from 'reactstrap';
import ModalFormAssign from './ModalFormAssign'
import { useDispatch } from 'react-redux';
import {getAssignAction} from '../../../actions/index'
export default function AssignList({assign,deleteAssign}) {
    const handleDeleteClick = (id,name) =>{
      if(window.confirm(`Bạn chắc chắn muốn xoá lịch chiếu ${name}`)){
        deleteAssign(id)
      }
    }
    return (
        <>
                <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên phim </th>
          <th>Rạp chiếu</th>
          <th>Lịch chiếu</th>
          <th> Thời gian chiếu </th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
          {assign.map((item,index) =>{
              return (
                <tr key = {item.movie_show_id}>
                <th scope="row">{index + 1}</th>
                <td>{item.movie_name}</td>
                <td>{item.theatre_name}</td>
              <td>{`${item.movie_show_date}`.length > 10 ? item.movie_show_date.slice(0,10) : item.movie_show_date}</td>
              <td> {item.time} </td>
              <td> <Button onClick = {e => handleDeleteClick(item.movie_show_id,item.movie_name)} color = "danger"> Xoá </Button> </td>
              </tr>
              )
          })}
     
      </tbody>
    </Table>

        </>
    )
}
