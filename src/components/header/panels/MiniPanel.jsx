import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MiniPanel extends Component {

   onClickIn(e) {
      e.stopPropagation()
      console.log(e)
      this.inputElement.click()
   }

   render() {
      
      return (
         <div className="mini-panel-profile" style={{
            display: this.props.render ? "flex" : "none"
            }}>

         <input type="file" 
         id="input-change-photo" 
         onChange={this.props.onChange}
         //criando uma referencia para forçar um click nesse elemeneto (function)
         ref={ (input) => this.inputElement = input } hidden/>

         <label htmlFor="input-change-photo" 
         className="btn-mini-panel" 
         //forçando o click
         // onClick={(e) => this.inputElement.click()}
         >
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