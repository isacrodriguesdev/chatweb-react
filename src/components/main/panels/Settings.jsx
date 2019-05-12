import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Settings extends Component {

   constructor(props) {
      super(props)

      this.state = {
         name: this.props.user.name,
         email: this.props.user.email,
         totalFriends: this.props.user.totalFriends,
         totalOnline: this.props.user.totalOnline,
         password: "",
         confirmPassword: "",
      }
   }

   render() {

      return (
         <div id="settings">
            <div id="container-settings">

               <div id="part1">

                  <div className="card-user">
                     <div id="pt1-container">
                        <label htmlFor="">
                           <img src={this.props.user.photoUrl} id="photo-sett" />
                        </label>
                        <h5>{this.props.user.name}</h5>
                     </div>

                     <div id="pt2-container">

                        <div id='info1'> <p> Online <br /> <b>{this.state.totalOnline}</b> </p> </div>
                        <div id='info2'> <p> Amigos <br /> <b>{this.state.totalFriends}</b> </p> </div>
                        {/* <div id='info3'> <p> Solicitações <br /> <b>0</b> </p> </div> */}

                     </div>
                  </div>

               </div>

               <div id="part2">
                  <div id="card-user-edit">
                     <form action="">
                        <div className="flex-row">
                           <div><legend>Nome</legend>
                              <input type="text" value={this.state.name} 
                              />
                           </div>
                           <div>
                              <legend>Email</legend>
                              <input type="email" value={this.state.email} 
                              />
                           </div>
                        </div>
                        
                        <div className="flex-row">
                           
                           <div> <legend>Senha</legend>
                              <input type="password" value={this.state.password} placeholder="Nova senha" 
                              />
                           </div>

                           <div> <legend>Senha</legend>
                              <input type="password" value={this.state.confirmPassword} placeholder="Repita a nova senha" 
                              />
                           </div>
                        </div>
                        <button onClick={e => e.preventDefault()}>Alterar</button>
                     </form>
                  </div>
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

   user: state.user

}), mapDispatchToProps)(Settings)