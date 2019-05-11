import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Active extends Component {

   render() {

      return (
         <div id="active-user-chat">
            <div id="item-active-user">
               <img src={`https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.0-9/55604852_2005508002911820_5414181661044637696_n.jpg?_nc_cat=111&_nc_ht=scontent.fgyn11-1.fna&oh=b78f41966e342236382202b40e5ddbf0&oe=5D685D40`} alt=""/>
               <p>{this.props.name}<br/>
                  <span>{this.props.isdigit}</span>
               </p>
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {

   return bindActionCreators({}, dispatch)
}

export default connect((state) => ({
   

}), mapDispatchToProps)(Active)