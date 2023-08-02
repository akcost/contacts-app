import React, {useState} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import {addContact} from './contactService';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [codeName, setCodeName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty before submitting the form
        if (!firstName || !lastName || !codeName || !phone) {
            alert('Please fill in all the fields before submitting.');
            return;
        }

        // Create the new contact object with the form values
        const newContact = {
            firstName: firstName,
            lastName: lastName,
            codeName: codeName,
            phone: phone,
        };

        addContact(newContact)
            .then((data) => {
                console.log('Contact added successfully:', data);
                // Reset the form fields after successful submission
                setFirstName('');
                setLastName('');
                setCodeName('');
                setPhone('');
                window.location.reload();
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName" className="mb-3">
                    <Row>
                        <Col sm={3}>
                            <Form.Label>First Name:</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                maxLength={50}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="lastName" className="mb-3">
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Last Name:</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                maxLength={50}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="codeName" className="mb-3">
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Code Name:</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={codeName}
                                onChange={(e) => setCodeName(e.target.value)}
                                maxLength={100}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="phone" className="mb-3">
                    <Row>
                        <Col sm={3}>
                            <Form.Label>Phone:</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                maxLength={30}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Button type="submit">Add Contact</Button>
            </Form>
        </div>
    );
};

export default ContactForm;
