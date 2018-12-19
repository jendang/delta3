import React from 'react'
const Timestamp = require('react-timestamp')
import './style.css'

export default (props) => {
    const fromMe = props.user['id'] ? 'from-me' : ''
    return (
        
        <div>
            <div><b>{props.user.firstName}: </b></div>
            <div><i>{props.content}</i></div>
            <div>
                <Timestamp time={props.time} format='full' includeDay />
            </div>
            {console.log(props.user['id'])}
        </div>
    )
}


                                        {/*props.ticket.comments.map(comment =>
                                            <div className="comment" key={comment.id}>
                                              <div className="comment-author">{comment.user.username}: </div>
                                              <div className="comment-test">{comment.text}</div>
                                        </div>)*/}