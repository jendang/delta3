/* eslint-disable import/first */

import React from 'react'
const Timestamp = require('react-timestamp')
import './style.css'

export default (props) => {

    return (
        <div className="rcw-message" key={props.id}>
            <div className="rcw-client">
                <div>
                    <Timestamp time={props.time} format='full' includeDay />
                </div>
                <div><b>{props.user.firstName}: </b></div>
                <div><i>{props.content}</i></div>

                {console.log(props.user['id'])}
            </div>
        </div>
    )
}


{/*props.ticket.comments.map(comment =>
                                            <div className="comment" key={comment.id}>
                                              <div className="comment-author">{comment.user.username}: </div>
                                              <div className="comment-test">{comment.text}</div>
                                        </div>)*/}


