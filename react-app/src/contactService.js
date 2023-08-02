// contactService.js

const BASE_URL = 'http://localhost:8080/api/contacts';

export const fetchContacts = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const addContact = async (contact) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        });
        if (!response.ok) {
            throw new Error('Failed to add contact');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const deleteContact = async (id) => {
    try {
        const apiUrl = `${BASE_URL}/${id}`;
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to delete contact');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
