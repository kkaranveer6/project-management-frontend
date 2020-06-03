import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

function Settings(props){
    return(
    <div>
        <Sidebar routeChange={props.routeChange} content={'Settings'}/>
    </div>
    );
}

export default Settings;