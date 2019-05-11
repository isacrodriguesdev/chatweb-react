import React from 'react'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import App from './App'
import Login from './auth/Login'

const isAuthenticated = true

const PrivateRoute = ({component: Component, ...rest}) => (
   <Route {...rest} render={(props) => (
      isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      
   )} />
)


const Routes = function() {

   return (
      <BrowserRouter>

         <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={App} />
         </Switch>
      
      </BrowserRouter>
   )
}

export default Routes