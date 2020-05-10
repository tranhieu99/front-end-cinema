import React from 'react'
import { Table,Button } from 'reactstrap';

export default function ListTheatre({theatre,handleDeleteTheatre,onEditClick}) {
    const onHandleDelete = (data) =>{
      if(window.confirm("Bạn chắc chắn muốn xoá?") ){
        handleDeleteTheatre({id: data})
      }
    }
    return (
        <>
              <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên phòng chiếu</th>
          <th>Số ghế</th>
          <th>Thao tác</th>
          <th>Thao tác</th>

        </tr>
      </thead>
      <tbody>
          {theatre.map((item,index)=>{
              return(
   <tr key = {item.theatre_id}>
   <th scope="row">{index + 1}</th>
          <td>{item.theatre_name}</td>
          <td>{item.theatre_seat}</td>
          <td> <Button color ="success" onClick = {(e) => onEditClick(item.theatre_id)}> Sửa </Button> </td>

          <td> <Button color ="danger" onClick = {(e) => onHandleDelete(item.theatre_id)}> Xoá </Button> </td>
 </tr>
              )
          })
          }
     
     
      </tbody>
    </Table>
        </>
    )
}
