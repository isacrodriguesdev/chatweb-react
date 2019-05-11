import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Entry from './Entry'
import Input from './Input'
import Output from './Output'
import Emojis from './panels/Emojis'
import Mount from '../../utils/Mount'

class Chat extends Component {

    messages() {

        const messages = []

        this.props.messages.map(message => {

            let key = 0

            if(message.id == this.props.id) {
                messages.push(
                    <Input message={message.content} />
                )
            }else {
                messages.push(
                    <Output message={message.content} />
                )
            }
        })

        return messages

    }

    render() {

        return (
            <div id="chat">

                <div className="chat-messages">
                    {this.messages()}
                </div>

                <Mount render={this.props.toggle_emojis}>
                    <Emojis />
                </Mount>


                <div className="chat-entry">
                    <Entry />
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({}, dispatch)
}

export default connect((state) => ({

    toggle_emojis: state.actions.toggle_panel_emojis,
    messages: state.chat.messages,
    id: state.user.id

}), mapDispatchToProps)(Chat)