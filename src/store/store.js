import {combineReducers} from 'redux'

import user from './user'
import actions from './actions'
import contacts from './contacts'
import chat from './chat'

export default combineReducers({
    user, actions, contacts, chat
})