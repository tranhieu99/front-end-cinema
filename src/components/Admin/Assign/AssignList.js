import React from 'react'
import { Table } from 'reactstrap';

export default function AssignList({assign}) {
    console.log(assign)
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
              </tr>
              )
          })}
       
     
      </tbody>
    </Table>

        </>
    )
}
