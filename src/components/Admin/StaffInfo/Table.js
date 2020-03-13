import React, {useEffect} from 'react'
import {Table, Button} from 'reactstrap'
import Loading from '../../../components/Loading'
export default function TableStaff({staffList,onHandleClick}) {
useEffect(e => console.log(staffList),[staffList])

    return (
        <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Chức vụ</th>
            <th> Thao tác </th>
          </tr>
        </thead>
        {!staffList.length ? <Loading /> : <tbody> 
  {staffList.map((item,index)=>{
      return( 
          <tr  key = {`${index}`} >
  <th scope = "row"> {index + 1}</th>
  <td> {`${item.first_name} ${item.last_name}`} </td>
  <td> {item.birthday.slice(0,10)}</td>
  <td> {item.gender}</td>
  <td> {item.role}</td>
  <td><Button outline color="danger" name="id_user"  onClick = { e => onHandleClick(index,e)}  type="submit" value={item.user_id}  >Xoá</Button> </td>
          </tr>
      )
  })}

        </tbody>}
        
      </Table>
    )
}
