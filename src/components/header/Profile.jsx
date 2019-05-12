import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import iconAdd from '../../images/icons/add.png'
import iconSett from '../../images/icons/settings.png'
import MiniPanel from './panels/MiniPanel'
import Mount from '../utils/Mount'

import {Creators as actions} from '../../store/actions'
import {Creators as userActions} from '../../store/user'

class Profile extends Component {

   logout() {

   }
   changePhoto(e) {

      const reader = new FileReader()

      reader.onload = (e) => {
         this.props.changePhoto(this.props.id, e.target.result)
      }
      
      reader.readAsDataURL(e.target.files[0])

      this.props.togglePanelMini()
   }

   // EVENTS

   togglePanelMini(e) {
      e.stopPropagation()
      this.props.togglePanelMini()
   }

   openChat(e) {
      e.stopPropagation()
      this.props.hasChat.id ? this.props.openChat() : console.log('Sem chat')
   }

   render() {

      return (
         <div id="profile">


            <div id="user-profile">

               <div content="user">
                  <img src={this.props.user.photoUrl} 
                  title={this.props.user.name} 
                  onClick={this.togglePanelMini.bind(this)}
                  />
               </div>
               <div content="mini-panel">
                  <img src="https://image.flaticon.com/icons/svg/134/134908.svg"
                  onClick={this.openChat.bind(this)} 
                  />
                  <img src={iconAdd} 
                  />
                  <img src={iconSett} 
                  onClick={() => this.props.openSettings()} 
                  />
               </div>
            </div>

            <MiniPanel onChange={(this.changePhoto.bind(this))} render={this.props.togglePanel} />

         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({...actions, ...userActions}, dispatch)
}

export default connect((state) => ({
   togglePanel: state.actions.toggle_panel_mini,
   togglePanelSettings: state.actions.toggle_panel_settings,
   hasChat: state.chat.user,
   id: state.auth.id,
   user: state.user

}), mapDispatchToProps)(Profile)