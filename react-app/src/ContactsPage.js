import './index.css';
import ContactsComponent from "./ContactsComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./MyNavbar";

function ContactsPage() {
    return (
        <div>
            <MyNavbar/>
            <div className="mx-auto w-50">
                <ContactsComponent/>
            </div>
        </div>
    );
}

export default ContactsPage;
