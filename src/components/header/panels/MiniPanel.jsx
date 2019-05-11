import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MiniPanel extends Component {

   render() {

      return (
         <div className="mini-panel-profile">

         <input type="file" 
         id="input-change-photo" 
         onChange={this.props.onChange}
         hidden />

         <label htmlFor="input-change-photo" className="btn-mini-panel">
            <div>Alterar foto</div>
         </label>
            
            <div onClick={this.props.onClickLogout} 
            className="btn-mini-panel"> Sair da conta</div>
         
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({}, dispatch)
}

export default connect((state) => ({


}), mapDispatchToProps)(MiniPanel)