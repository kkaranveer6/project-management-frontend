import React from 'react';
import Card from '@material-ui/core/Card';

import './Register.css';

function Register(props){
        
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
                                />
                                <label>Name:</label>
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

export default Register;