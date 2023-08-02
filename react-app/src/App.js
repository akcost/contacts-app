import logo from './logo.svg';
import './index.css';
import ContactsComponent from "./ContactsComponent";
import {Button, Container, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Contacts</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="mx-auto w-50">
                <ContactsComponent/>
            </div>
        </div>
    );
}

export default App;
