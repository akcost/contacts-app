import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import { Col, Row } from 'react-bootstrap';

import { fetchContacts, deleteContact } from './contactService';

const ContactsComponent = () => {
    const [contacts, setContacts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const [sortOrders, setSortOrders] = useState({
        name: 'asc',
        codeName: 'asc',
        phone: 'asc',
    });

    useEffect(() => {
        fetchContacts()
            .then((data) => {
                // Sort the contacts by first name before saving to state
                const sortedData = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
                setContacts(sortedData);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    const handleDeleteContact = (id) => {
        deleteContact(id)
            .then(() => {
                setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
            })
            .catch((error) => console.error('Error:', error));
    };

    const handleSortChange = (event) => {
        const selectedSortCriteria = event.target.value;
        setSortCriteria(selectedSortCriteria);

        // Toggle the sorting order for the selected criteria
        const currentSortOrder = sortOrders[selectedSortCriteria];
        const newSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';

        setSortOrder(newSortOrder);
        setSortOrders({ ...sortOrders, [selectedSortCriteria]: newSortOrder });
        sortContacts(selectedSortCriteria, newSortOrder);
    };

    const sortContacts = (criteria, order) => {
        const sortedContacts = [...contacts];

        sortedContacts.sort((a, b) => {
            if (criteria === 'name') {
                return order === 'asc' ? a.firstName.localeCompare(b.firstName) : b.firstName.localeCompare(a.firstName);
            } else {
                return order === 'asc' ? a[criteria].localeCompare(b[criteria]) : b[criteria].localeCompare(a[criteria]);
            }
        });

        setContacts(sortedContacts);
    };

    const getSortSymbol = (criteria) => {
        if (sortCriteria === criteria) {
            return sortOrder === 'asc' ? '∆' : '∇';
        }
        return '';
    };

    return (
        <div>
            <h2>Create a New Contact</h2>
            <br />
            <div className="mx-auto w-75">
                <ContactForm />
            </div>
            <h1 className="font-bold">Contacts:</h1>
            <Row>
                <Col sm={3} className="font-bold hover: cursor-pointer select-none" onClick={() => handleSortChange({ target: { value: 'firstName' } })}>
                    First name {getSortSymbol('firstName')}
                </Col>
                <Col sm={3} className="font-bold hover: cursor-pointer select-none" onClick={() => handleSortChange({ target: { value: 'lastName' } })}>
                    Last name {getSortSymbol('lastName')}
                </Col>
                <Col sm={3} className="font-bold hover: cursor-pointer select-none" onClick={() => handleSortChange({ target: { value: 'codeName' } })}>
                    Code name {getSortSymbol('codeName')}
                </Col>
                <Col sm={3} className="font-bold hover: cursor-pointer select-none" onClick={() => handleSortChange({ target: { value: 'phone' } })}>
                    Phone number {getSortSymbol('phone')}
                </Col>
            </Row>

            {contacts.map((contact) => (
                <Row key={contact.id}>
                    <Col sm={3}> {contact.firstName}</Col>
                    <Col sm={3}> {contact.lastName}</Col>
                    <Col sm={3}> {contact.codeName}</Col>
                    <Col sm={3}> {contact.phone}</Col>
                </Row>
            ))}
        </div>
    );
};

export default ContactsComponent;
