import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Chat from './main/Chat/Chat'
import Settings from './main/panels/Settings'
import Profile from './header/Profile'
import Contacts from './menu/panels/Contacts'
import Active from './header/Active'
import Mount from './utils/Mount'

import {Creators as actions} from '../store/actions'
import {Creators as userActions} from '../store/user'

class App extends Component {

   closePanels(e) {
      e.stopPropagation()
      this.props.closeAllPanels()
   }

   componentWillMount() {
      this.props.getAuthUser('token')
   }

   render() {

      return (
         <div className="container" onClick={this.closePanels.bind(this)}>

            <div id="header">
               <Profile />
               <div id="active-chat">
                  <Mount render={this.props.isOpenChat}>
                     <Active />
                  </Mount>
               </div>
            </div>

            <div id="menu">
               <div className="panels-menu">
                  <Contacts />
               </div>
            </div>

            <div id="main">
               <div className="panels-main">

                  <Mount render={this.props.isOpenHome}> <h2>Home</h2> </Mount>

                  <Mount render={this.props.isOpenChat}> 
                     <Chat /> 
                  </Mount>

                  <Mount render={this.props.isOpenSettings}> <Settings /> </Mount>
                  
               </div>
            </div>

         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({...actions, ...userActions}, dispatch)
}

export default connect((state) => ({

   isOpenHome: state.actions.openHome,
   isOpenChat: state.actions.openChat,
   isOpenSettings: state.actions.openSettings

}), mapDispatchToProps)(App)