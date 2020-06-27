import React, {useState} from 'react';
import Card from '@material-ui/core/Card';

import './Register.css';

function Register(props){
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister(event){
        event.preventDefault();
        await fetch('http://localhost:3000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                email: email,
                name: name,
				password: password
			})
		})
        .then(res => {
            if(res.status === 200) props.routeChange('login');
        })
        .then(data => console.log(data))
		.catch(err => console.log(err))
    }

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => props.routeChange('login')}>
                            Login
                        </button>
                    </li>
                </ul>
            </nav>
            <div className='register-form container'>
                <Card className='register-card'>
                    <h3>Register Page</h3>
                    <div>
                        <div>
                            <form>
                                <label>Email:</label>
                                <input 
                                    type="text" 
                                    name="email"
                                    value={email}
                                    onInput={event => setEmail(event.target.value)}
                                />
                                <label>Name:</label>
                                <input 
                                    type="text" 
                                    name="email"
                                    value={name}
                                    onInput={event => setName(event.target.value)}
                                />
                                <label>Password:</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    value={password}
                                    onInput={event => setPassword(event.target.value)}
                                />
                                <button onClick={handleRegister}>
                                    Submit
                                </button>
                            </form>
                        </div>

                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Register;