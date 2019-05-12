import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Active extends Component {

   render() {

      return (
         <div id="active-user-chat">
            <div id="item-active-user">
               <img src={this.props.contact.photoUrl} />
               <p>{this.props.contact.name}<br/>
                  <span>
                     {this.props.isTyping ? "digitando..." : ""}
                  </span>
               </p>
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({}, dispatch)
}

export default connect((state) => ({

   contact: state.chat.user,
   isTyping: state.chat.isTyping

}), mapDispatchToProps)(Active)