import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Chat from './main/Chat/Chat'
import Settings from './main/panels/Settings'
import Profile from './header/Profile'
import Contacts from './menu/panels/Contacts'
import Active from './header/Active'
import Mount from './utils/Mount'

class App extends Component {

   render() {

      return (
         <div className="container">

            <div id="header">
               <Profile />
               <div id="active-chat">
                  <Mount render={this.props.openChat}>
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

                  <Mount render={this.props.openHome}> <h2>Home</h2> </Mount>

                  <Mount render={this.props.openChat}> 
                     <Chat data-chat={{}} /> 
                  </Mount>

                  <Mount render={this.props.openSettings}> <Settings /> </Mount>
                  
               </div>
            </div>

         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({}, dispatch)
}

export default connect((state) => ({

   openHome: state.actions.openHome,
   openChat: state.actions.openChat,
   openSettings: state.actions.openSettings

}), mapDispatchToProps)(App)