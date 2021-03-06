import React, { useState } from 'react';
import { Card, Col, Row, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactModal from './Modal'
import animalImgVertical from "../img/BuildAnimals Poster.jpg"
import Contact from '../pages/Contact';



const HorizontalCard = ({ img }) => {
    const [show, setShow] = useState(false);
    const [showContact, setShowContact] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseContact = () => setShowContact(false);
    const handleShowContact = () => setShowContact(true);
    return (
        <div className="container">

            <Card className="m-4">
                <Row noGutters className="bg-dark rounded shadow animal-card">
                    <Col>
                        <Card.Img src={animalImgVertical} alt="Build Animals" />
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
                             
                                {/* <Button className="btn-light" onClick={handleShow}>
                                    <i class="fas fa-video mr-2"></i>
                                    Watch the Trailer Now!
                                </Button> */}
                                <Button className="btn-light" onClick={handleShow}>
                                    <i class="far fa-envelope mr-2">
                                        <Link to="/contact" className="ml-2 contact-link">
                                         Contact Us!
                                        </Link>
                                    </i>
                                    
                                </Button>



                            </div>
                       
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default HorizontalCard;