import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormAssign from '../Assign/FormAssign'
const ModalFormAssign = ({addAssign,buttonLabel,className}) => {

  const [modal, setModal] = useState(false);
const [formData, setFormData] = useState({});
  const toggle = () => setModal(!modal);
  const handleSubmitClick = (e) =>{
    addAssign(formData);
    setModal(!modal)
  }

  return (
    <div>
      <Button color="danger" className = "mb-3" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <FormAssign formData = {formData} setFormData = {setFormData}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmitClick}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFormAssign;
