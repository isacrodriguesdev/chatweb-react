import {combineReducers} from 'redux'

import user from './user'
import actions from './actions'
import contacts from './contacts'
import chat from './chat'
import auth from './auth'

export default combineReducers({
    user, actions, contacts, chat, auth
})