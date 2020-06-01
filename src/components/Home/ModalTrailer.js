import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

const ModalTrailer = ({buttonLabel,buttonColor,className,movie_trailer}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color={buttonColor} onClick={toggle}> {!buttonLabel ? <i class="fa fa-play"></i> : buttonLabel }</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <iframe  src = {movie_trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalTrailer;
