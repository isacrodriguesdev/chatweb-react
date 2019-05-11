import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import iconAdd from '../../images/icons/add.png'
import iconSett from '../../images/icons/settings.png'
import MiniPanel from './panels/MiniPanel'
import Mount from '../utils/Mount'

import {Creators as actions} from '../../store/actions'

class Profile extends Component {

   logout() {

   }
   changePhoto(e) {
      console.log(e.target.files)
      this.props.togglePanelMini()
   }

   render() {

      return (
         <div id="profile">

            <div id="user-profile">

               <div content="user">
                  <img src="https://lh3.googleusercontent.com/a-/AAuE7mAy2cm5jbpX8w83xKNXs6xZRolle7bBF1BNZd6s=s96" 
                  alt={"name"} title="name" 
                  onClick={() => this.props.togglePanelMini()}
                  />
               </div>
               <div content="mini-panel">
                  <img src="https://image.flaticon.com/icons/svg/134/134908.svg"
                  onClick={() => this.props.openChat()} 
                  />
                  <img src={iconAdd} 
                  />
                  <img src={iconSett} 
                  onClick={() => this.props.openSettings()} 
                  />
               </div>
            </div>
            <Mount render={this.props.togglePanel}>
               <MiniPanel onChange={this.changePhoto.bind(this)} />
            </Mount>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators(actions, dispatch)
}

export default connect((state) => ({
   togglePanel: state.actions.toggle_panel_mini,
   togglePanelSettings: state.actions.toggle_panel_settings

}), mapDispatchToProps)(Profile)