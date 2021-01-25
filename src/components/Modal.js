import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

const ContactModal = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    //   <Modal show={props.show} onHide={props.handleClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal heading</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={props.handleClose}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={props.handleClose}>
    //       Save Changes
    //     </Button>
    //   </Modal.Footer>
    // </Modal>

    <Modal show={show} onHide={handleClose} className="video-container modal-viewport">
      {/* <Modal.Header closeButton>
</Modal.Header> */}
      <Modal.Body >

        <iframe src="https://player.vimeo.com/video/57875730?autoplay=1"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          width="640px"
          height="360px"
          className="responsive-iframe">
        </iframe>
    Coming Soon
</Modal.Body>
    </Modal>
  );
}

export default ContactModal;