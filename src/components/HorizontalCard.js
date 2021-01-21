import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap'


const HorizontalCard = ({ img }) => {
    return (
        <Card className="mb-2">
            <Row noGutters className="bg-dark rounded shadow">
                <Col>
                    <Card.Img src={img} alt="Build Animals" />
                </Col>
                <Col>
                    <Card.Body className="rounded">
                        <Card.Title className="text-center text-light letter-spacing">
                            Build Animals
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
                            <Button className="btn-light">
                                Watch the Trailer Now!
                        </Button>

                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default HorizontalCard;