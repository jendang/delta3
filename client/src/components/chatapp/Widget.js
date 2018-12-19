import React, { Component } from 'react'
import Comments from './Comments'
import ToggleBar from './ToggleBar'
import './Widget.css'
import './style.css'
import { createMessage, getMessages } from '../../actions/messages'
import { connect } from 'react-redux'
import dp_ico from '../../img/dp.png'
import fullscr_ico from '../../img/full-screen.png'
import search_ico from '../../img/search.png'
import minscr_ico from '../../img/minimize.png'

class Widget extends Component {
    state = {
        showComments: false,
        comments: []
    }

    componentDidMount() {
        this.props.getMessages(Number(this.props.match.params.id))
    }

    toggleComments = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    submitComments = (event) => {
        if (event.keyCode !== 13)
            return
        const comment = {
            content: event.target.value
        }
        let comments = Object.assign([], this.state.comments)
        comments.shift(comment)

        this.props.createMessage(this.props.match.params.id, comment)

        //console.log("submitComment:" +event.target.value)
        this.setState({
            comments: comments
        })

        event.target.value = "" //clear out the input
    }

    render() {
        if (this.state.showComments === true)
            return (
                <div className="rcw-widget-container">

                    <div className="rcw-conversation-container">

                        <div className="rcw-header">
                            {/*<button className="rcw-close-button"><img src={"###"} class="rcw-close" alt="close" /></button>*/}
                            <div>
                                <img className="rcw-title" src={dp_ico} alt="logo" />
                                <h4 className="rcw-title">Project #{Number(this.props.match.params.id)}</h4>
                                <img className="rcw-chatboxlogo" src={search_ico} alt="search content" />
                                <img className="rcw-chatboxlogo" src={fullscr_ico} alt="full screen" />
                                <img className="rcw-chatboxlogo" src={minscr_ico} alt="minimize windows" />
                            </div>
                        </div>

                        <div className="rcw-messages-container">

                            <div className="rcw-message">
                                <div className="rcw-client">
                                    <div className="rcw-message-text">
                                        {this.props.comments.map(comment => {
                                            return <Comments key={comment.id} {...comment} />
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <input className="input" onKeyDown={this.submitComments.bind(this)} type='text' placeholder='Type here' />
                        </div>

                        <div>
                            <ToggleBar onToggle={this.toggleComments.bind(this)} projectId={Number(this.props.match.params.id)} />
                        </div>
                    </div>

                </div>
            )



        return (
            <ToggleBar onToggle={this.toggleComments.bind(this)} projectId={Number(this.props.match.params.id)} />
        )


    }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    users: state.users === null ? null : state.users,
    comments: state.messages

})

export default connect(mapStateToProps, { getMessages, createMessage })(Widget)