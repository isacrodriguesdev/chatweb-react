
const initial = {
   isLogged: true,
   id: 1,
   token: null,
}

const Types = {
   LOGGED_SYSTEM: 'auth/LOGGED_SYSTEM',
   LOGOUT_SYSTEM: 'LOGOUT_SYSTEM'
}

export const Creators = {
   
   login: () => {
      
   },
   logout: () => {

   }
}

export default function(state = initial, action) {

   const {type, payload} = action

   switch(type) {
       case Types.LOGGED_SYSTEM:
           return {...state, payload, isLogged: true}
      case Types.LOGOUT_SYSTEM:
           return {...state}
       default:
           return state
   }
}