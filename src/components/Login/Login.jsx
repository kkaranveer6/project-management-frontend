import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import './Login.css';

function Login(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    async function handleLogin(event){
        event.preventDefault();
        await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                email: email,
				password: password
			})
		})
        .then(res => {
            if(res.status === 200) props.routeChange('tasks');
        })
		.catch(err => console.log(err))
    }

    return(
        <div className='container'>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => props.routeChange('register')}>
                            Register
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="login-form">
                <Card className="login-card">
                    <h3>Login Page</h3>
                    <div>
                        <div>
                            <form>
                                <label>Email:</label>
                                <input 
                                    type="text" 
                                    name="email"
                                    onInput={event => setEmail(event.target.value)}
                                />
                                <label>Password:</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    onInput={event => setPassword(event.target.value)}
                                />
                                <button onClick={event => handleLogin(event)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Login;