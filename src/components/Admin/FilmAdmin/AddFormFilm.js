
/*  Trung Hieu Tran
    12/3/2020
*/

import React from 'react';
import {FormGroup,FormText, Label, Input } from 'reactstrap';

const AddFormFilm = (props) => {
  return (
      <div className = "add-film-form">
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="fim-name" className="mr-sm-2">Tên Phim</Label>
        <Input type="text" name="movie_name" id="fim-name" />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="director" className="mr-sm-2">Đạo diễn</Label>
        <Input type="text" name="movie_director" id="director"  />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="film-type">Thể Loại</Label>
        <Input type="select" name="movie_type" id="film-type" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="film-image">File</Label>
        <Input type="file" name="movie_image" id="film-image" />
        <FormText color="muted">
          Mởi chọn ảnh
        </FormText>
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
        <Label for="film-trailer" className="mr-sm-2">Trailer phim (link Youtube)</Label>
        <Input type="text" name="movie_trailer" id="film-trailer" />
      </FormGroup>
      <FormGroup className="mb-3 mr-sm-2 mb-sm-0">
      <Label for="film-des">Miêu tả phim</Label>
        <Input type="textarea" name="movie_describe" id="film-des" />
      </FormGroup>
      </div>
  );
}

export default AddFormFilm;
