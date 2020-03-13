/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/*  Trung Hieu Tran
    12/3/2020
*/

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import AddFormFilm from './AddFormFilm'
const ModalFormFilm = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className = "mb-2">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Thêm phim mới</ModalHeader>
        <ModalBody>
            <AddFormFilm />
        </ModalBody>
        <ModalFooter>
          <Button color="success">Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFormFilm;
