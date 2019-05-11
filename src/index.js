import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import './app.css'
import Routes from './components/Routes'
import root from './store/store'

const store = createStore(root, applyMiddleware(multi, thunk))

ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));