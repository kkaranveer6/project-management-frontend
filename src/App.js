import React, {useState} from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Tasks from './components/Tasks/Tasks';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
  const [currentRoute, routeChange] = useState('login');

  switch (currentRoute){
    case 'tasks':
      return(<Tasks routeChange={routeChange} />);
    case 'contact':
      return(<Contact routeChange={routeChange} />);
    case 'login':
      return(<Login routeChange={routeChange} />);
    case 'register':
      return(<Register routeChange={routeChange} />);
    default:
      return 0;
  }
}

export default App;