import React from 'react';
import './ToggleBar.css'
// import Img from 'react-image'
// import logo from  '../img/logo'


export default (props) => {
    return (
        <div className="toggle" onClick={props.onToggle.bind(this)}> 
            {/* This chatbot for project: {props.projectId} */}
{/*   <Img src={'https://files.slack.com/files-pri/T0DK39WAJ-FERCYMFS5/logo.png'} width='50' height='50' /> */}
        </div>
        
    )
}
