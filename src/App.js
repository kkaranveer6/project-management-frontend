import React, {useState} from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SideBar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';
import Contact from './components/Contact/Contact';
import Settings from './components/Settings/Settings';
import './App.css';


function App(){
  const [currentRoute, routeChange] = useState('tasks');

  if(currentRoute === 'login'){
    return(<Login routeChange={routeChange}/>);
  }

  if(currentRoute === 'register'){
    return(<Register routeChange={routeChange}/>);
  }


  if(currentRoute === 'tasks'){
    return(<Tasks routeChange={routeChange}/>);
  }

  if(currentRoute === 'contact'){
    return(<Contact routeChange={routeChange}/>);
  }

  if(currentRoute === 'settings'){
    return(<Settings routeChange={routeChange}/>);
  }  

  return (
    <div className="App">
      <SideBar routeChange={routeChange}/>
    </div>
  );
}

export default App;
