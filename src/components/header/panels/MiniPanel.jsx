import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class MiniPanel extends Component {

   onChangeIn(e) {
      console.log(e.target.files)
      e.stopPropagation()
   }

   render() {
      
      // onChange={this.props.onChange}
      return (
         <div className="mini-panel-profile">

         <input type="file" 
         id="input-change-photo" 
         onChange={(e) => this.onChangeIn(e)}
         //criando uma referencia para forçar um click nesse elemeneto (function)
         ref={ (input) => this.inputElement = input }
          hidden />

         <label htmlFor="input-change-photo" 
         className="btn-mini-panel" 
         onClick={e => e.stopPropagation()}
         onChange={(e) => this.onChangeIn(e)}
         //forçando o click
         onClick={(e) => this.inputElement.click()}
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