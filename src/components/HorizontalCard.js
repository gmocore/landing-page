import React, { useState } from 'react';
import { Card, Col, Row, Button, Modal } from 'react-bootstrap'


const HorizontalCard = ({ img }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Card className="mb-2">
            <Row noGutters className="bg-dark rounded shadow">
                <Col>
                    <Card.Img src={img} alt="Build Animals" />
                </Col>
                <Col className="d-flex flex-column align-items-center">
                    <Card.Body className="rounded center-body d-flex flex-column justify-content-around">
                        <Card.Title className="text-center text-light letter-spacing">
                            BUILD ANIMALS
                        </Card.Title>
                        <Card.Text>
                            Welcome to the BuildAnimals world, where anything is possible, and everything is learnable.
                        </Card.Text>
                        <Card.Text>
                            Come along with Zeke and Lilly as they join the BuildAnimals construction crew and learn to work together, where the only limitation is your imagination. Every day is an exciting adventure as they build amazing destinations and grow their friendships.
                        </Card.Text>
                        <Card.Text>
                            A fun, learning series for children that will nurture their creativity, imagination, confidence and excitement that can only be built by the BuildAnimals!
                        </Card.Text>
                        <div className="container-fluid d-flex justify-content-center">
                            <Button className="btn-light" onClick={handleShow}>
                                Watch the Trailer Now!
                        </Button>
                            <Modal show={show} onHide={handleClose} variant="dark">
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Embedded video goes here
                                    <iframe 
                                    src="https://player.vimeo.com/video/413931338" 
                                    width="100%" 
                                    height="auto" 
                                    frameborder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture" 
                                    allowfullscreen 
                                    />
                                        </Modal.Body>
                                
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default HorizontalCard;