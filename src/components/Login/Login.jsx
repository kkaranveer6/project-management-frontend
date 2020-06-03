import React from 'react';
import Card from '@material-ui/core/Card';
import './Login.css';

function Login(props){
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
                                />
                                <label>Password:</label>
                                <input 
                                    type="password" 
                                    name="password"
                                />
                                <button type="submit" onClick={() => props.routeChange('tasks')}>
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

export default Login;