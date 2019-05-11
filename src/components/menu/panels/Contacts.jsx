import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import iconChat from '../../../images/icons/chat.png'
import Search from '../../utils/Search'
import {Creators as contatcsActions} from '../../../store/contacts'

class Contacts extends Component {

   constructor(props) {
      super(props)

      this.state = {
         value: ""
      }
   }

   handleSearch(e) {
      this.setState({ value: e.target.value })
   }

   sendSearch(e) {
      if (e.key === 'Enter') {
         this.setState({ value: "" })
         console.log(this.state.value)
      }
   }

   componentWillMount() {
      console.log('Em pleno funcionamento')
   }

   status(status) {
      switch(status) {
         case 0: return 'Offline'
         case 1: return 'Online'
         case 2: return 'Ausente' 
         default: return 'Ocupado'
      }
   }

   contacts() { // listar usuarios nos contatos

      const users = []

      this.props.contacts.map(user => {
         users.push(
            <li key={user.id}>
               <div className="item-user-list">
                  <div className="item-avatar">
                     <img src={user.photoUrl}/>
                     <p>{user.name} <br />
                        <span className="status">
                           {this.status(user.status)}
                        </span>
                     </p>
                  </div>
                  <div className="item-btns">
                     <img src="https://image.flaticon.com/icons/svg/134/134920.svg" />
                  </div>
               </div>
            </li>
         )
      })

      return users
   }

   render() {

      return (

         <Fragment>

            <Search
               placeholder="Procure seus amigos"
               onChange={this.handleSearch.bind(this)}
               onKeyPress={this.sendSearch.bind(this)}
               value={this.state.value}
            />

            <div id="panel-contacts">
               <div id="list-contacts">
                  <ul>
                     {this.contacts()}
                  </ul>
               </div>
            </div>
         </Fragment>

      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({...contatcsActions}, dispatch)
}

export default connect((state) => ({

   contacts: state.contacts.users

}), mapDispatchToProps)(Contacts)