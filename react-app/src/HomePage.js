import './index.css';
import ContactsComponent from "./ContactsComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "./ContactForm";
import React from "react";
import MyNavbar from "./MyNavbar";

function HomePage() {
    return (
        <div>
            <MyNavbar/>
            <br/>
            <div className="mx-auto w-50">
                <h2>Create a New Contact</h2>
                <br/>
                <div className="mx-auto ">
                    <ContactForm/>
                </div>
                <br/>
                <ContactsComponent contactsNumber={10}/>
            </div>
        </div>
    );
}

export default HomePage;
