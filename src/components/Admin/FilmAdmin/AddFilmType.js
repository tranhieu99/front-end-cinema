import React, { useState,useEffect } from 'react';
import {get} from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Input,InputGroup} from 'reactstrap'
import { addFilmType } from "../../../api/film-api";
import ListType from './ListType'
const AddFilmType = (props) => {
  const {
    buttonLabel,
    className
  } = props;
 

  const [modal, setModal] = useState(false);
const [filmType,setFilmType] = useState({filmType: ''})
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Thêm thể loại</ModalHeader>
        <ModalBody>
        <InputGroup>
        <Input required placeholder="Nhập tên thể loại" type = "text" onChange = {(e) => setFilmType({filmType: `${e.target.value}`})}/>
        <ListType />
      </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
              if(!filmType.filmType){
                  alert("Không được để trống")
                  return
              }
              addFilmType(filmType,toggle)
              
              } }>Xác nhận</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddFilmType;
