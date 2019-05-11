import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Settings extends Component {

   render() {

      return (
         <div id="settings">
            <div id="container-settings">

               <div id="part1">

                  <div className="card-user">
                     <div id="pt1-container">
                        <label htmlFor="">
                           <img src="http://66.media.tumblr.com/1a91543aab26f9bb07cf6411996a32fb/tumblr_mnzw2mhWHo1ra6vg3o5_500.jpg" id="photo-sett" />
                        </label>
                        <h5>Isac Sergio R. Silva</h5>
                     </div>

                     <div id="pt2-container">

                        <div id='info1'> <p> Online <br /> <b>5</b> </p> </div>
                        <div id='info2'> <p> Amigos <br /> <b>15</b> </p> </div>
                        {/* <div id='info3'> <p> Solicitações <br /> <b>0</b> </p> </div> */}

                     </div>
                  </div>

               </div>

               <div id="part2">
                  <div id="card-user-edit">
                     <form action="">
                        <div className="flex-row">
                           <div><legend>Nome</legend>
                              <input type="text" value={"Isac S. Rodrigues Silva"} />
                           </div>
                           <div>
                              <legend>Email</legend>
                              <input type="email" value={"isac.sergio@outlook.com"} />
                           </div>
                        </div>
                        
                        <div className="flex-row">
                           
                           <div> <legend>Senha</legend>
                              <input type="password" value={""} placeholder="Nova senha" />
                           </div>

                           <div> <legend>Senha</legend>
                              <input type="password" value={""} placeholder="Repita a nova senha" />
                           </div>
                        </div>
                        <button>Alterar</button>
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


}), mapDispatchToProps)(Settings)