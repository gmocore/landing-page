import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'

const Contact = () => {

    const onSubmit = e => {
        setShow(!show)
    }
    const [show, setShow] = useState(false)
    return (
        <div className="container">
            <h1 className="text-center mt-2">Contact</h1>
            <div className="container border border-secondary rounded mt-4 shadow">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Send us a message!</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="secondary" size="lg" className="mb-4" onClick={onSubmit}>
                    <i class="far fa-envelope mr-2"></i>
                        Submit
                     </Button>
                     <Alert show={show} variant="danger" dismissible onClose={()=> setShow(false)}>
                            this doesnt do anything yet
                     </Alert>
                </Form>
                
            </div>
        </div>
    );
}

export default Contact;