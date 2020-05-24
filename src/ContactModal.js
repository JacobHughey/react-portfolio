import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class ContactModal extends Component {
    render() {
        return (
            <div className="ContactModal mb-4">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Contact</Modal.Title>
                        <a href="#" className="closebtn" onClick={this.props.parentMethod} style={{textDecoration: "none"}}>&times;</a>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" />
                            </Form.Group>



                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>A brief description of your project</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default ContactModal