import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Search extends Component {

   render() {

      return (
         <div className="search">
            <div className="search-input">
               <input 
               type={this.props.type || "text"} 
               placeholder={this.props.placeholder}
               onChange={this.props.onChange || ""} 
               onKeyPress={this.props.onKeyPress || ""} 
               value={this.props.value}
               />
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({}, dispatch)
}

export default connect((state) => ({


}), mapDispatchToProps)(Search)