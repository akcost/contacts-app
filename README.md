# Contacts App

An app where you can view, create, delete and search contacts.

### Backend Setup
1) Create a PostgreSQL database and add the url, user and pass to the ```application.properties``` file in src/main/resources.
2) [Optional] You can use `docker-compose.yml` to create a database using Docker and then do the 1. step.
3) Run app by running `gradlew appRun` for Windows cmd and `./gradlew appRun` for Mac/Linux/Windows PowerShell.

### Frontend Setup

1) Navigate to `react-app` folder .
2) Run `npm install`.
3) Run `npm start`.

### HTTP Methods

`/api/contacts` (GET): Retrieve a list of all contacts.

`/api/contacts/{id}` (GET): Retrieve a contact by its ID.

`/api/contacts` (POST): Save a new contact.

`/api/contacts/{id}` (DELETE): Delete a contact by its ID.
