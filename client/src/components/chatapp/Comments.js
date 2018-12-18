import React from 'react';
const Timestamp = require('react-timestamp');

export default (props) => {
   
    return (
        
        <div>
            <b>{props.user.firstName}: </b>
            <i>{props.content}</i>
            <div>
                <Timestamp time={props.time} format='full' includeDay />
            </div>
        </div>
    )
}