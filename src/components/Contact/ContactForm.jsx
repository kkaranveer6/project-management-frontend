import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import './ContactForm.css';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const updateFirstName = event => {
        setFirstName(event.target.value);
    }

    const updateLastName = event => {
        setLastName(event.target.value);
    }

    const updateEmail = event => {
        setEmail(event.target.value);
    }

    const updateSubject = event => {
        setSubject(event.target.value);
    }

    const updateMessage = event => {
        setMessage(event.target.value);
    }

    const onButtonClick = () => {
        console.log('button clicked');
    }

    return(
        <div className='container'>
            <h1>Contact Us:</h1>
            <Card className="contactForm">
                <input name='firstName' type='text' value={firstName} onInput={updateFirstName} placeholder='First Name: '/>
                <input name='lastName' type='text' value={lastName} onInput={updateLastName} placeholder='Last Name: '/>
                <input name='email' type='text' value={email} onInput={updateEmail} placeholder='Email: '/>
                <input name='subject' type='text' value={subject} onInput={updateSubject} placeholder='Subject: '/>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message:' value={message} onInput={updateMessage}></textarea>
                <button onClick={onButtonClick}>Submit</button>
            </Card>
        </div>
    );
}

export default ContactForm;