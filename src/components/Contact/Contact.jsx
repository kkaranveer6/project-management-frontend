import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact(props){
    return(
        <div className="contact">
            <Sidebar routeChange={props.routeChange} content={<ContactForm/>}/>
        </div>
    )
}

export default Contact;