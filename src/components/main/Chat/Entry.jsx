import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import {reduxForm} from 'redux-form'

import {Creators as chatActions} from '../../../store/chat'

class Entry extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }

    handleEntry(e) {
        this.setState({value: e.target.value})
    }

    sendMessage(e) {
        if(e.key === 'Enter') {

            this.props.createMessage({
                id: this.props.id,
                type: "text",
                date: Date.now(),
                content: this.state.value
            })
            
            this.setState({value: ""})
            return
        }
    }

    render() {

        return (
            <div className="input-chat-entry">
             <img src="https://image.flaticon.com/icons/svg/176/176663.svg" 
             style={{margin: "0px 8px", width: "40px",cursor:"pointer"}}
             onClick={() => this.props.togglePanelEmojis()}
             />

                <input type="text" placeholder="Envie uma mensagem" 
                value={this.state.value}
                onChange={this.handleEntry.bind(this)}
                onKeyPress={this.sendMessage.bind(this)}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({...chatActions}, dispatch)
}

export default connect((state) => ({

    id: state.user.id,
    name: state.user.name

}), mapDispatchToProps)(Entry)