import React, { useState } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';

const ModalTrailer = ({buttonLabel,className,movie_trailer}) => {


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}><i class="fa fa-play"></i></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
            <iframe src = {movie_trailer} > </iframe>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalTrailer;
