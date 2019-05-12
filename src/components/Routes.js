import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import App from './App'
import Login from './auth/Login'

class Routes extends Component {

   render() {

      const PrivateRoute = ({component: Component, ...rest}) => (
         <Route {...rest} render={(props) => (
            this.props.isLogged ? <Component {...props} /> : <Redirect to='/login' />
            
         )} />
      )

      return (
      <BrowserRouter>

         <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={App} />
         </Switch>
      
      </BrowserRouter>
   )
   }
}

export default connect((state) => ({
   isLogged: state.auth.isLogged
}))(Routes)