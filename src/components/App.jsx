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

class App extends Component {

   closePanels(e) {
      this.props.closeAllPanels()
   }

   render() {

      return (
         <div className="container" onClick={this.closePanels.bind(this)}>

            <div id="header">
               <Profile />
               <div id="active-chat">
                  <Mount render={this.props._openChat}>
                     <Active name="Lena Souza " isdigit="digitando..." />
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

                  <Mount render={this.props._openHome}> <h2>Home</h2> </Mount>

                  <Mount render={this.props._openChat}> 
                     <Chat data-chat={{}} /> 
                  </Mount>

                  <Mount render={this.props._openSettings}> <Settings /> </Mount>
                  
               </div>
            </div>

         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators(actions, dispatch)
}

export default connect((state) => ({

   _openHome: state.actions.openHome,
   _openChat: state.actions.openChat,
   _openSettings: state.actions.openSettings

}), mapDispatchToProps)(App)