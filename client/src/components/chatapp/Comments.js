/* eslint-disable import/first */

import React from 'react'
const Timestamp = require('react-timestamp')
import './style.css'

export default (props) => {
    // const checkAdmin = props.user.admin ? 'response' : 'client'
    // console.log(checkAdmin, 'firstcheck')
    // checkAdmin = true => set className='rcw-response' to align box to left
    // checkAdmin = false => set className='rcw-client' to align box to right
    return (
        <div className="rcw-message" key={props.id}>
            <div className={props.user.admin ? "rcw-response" : "rcw-client"}>
            {console.log(props.user, 'props.user')}
            {console.log(props.user.admin, 'props.user.admin')}
                <div><b>{props.user.firstName}</b></div>
                <div>{props.content}</div>
                <div>
                    <Timestamp time={props.time} format='full' />
                </div>
            </div>
        </div>
    )
}