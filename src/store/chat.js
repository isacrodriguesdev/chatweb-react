import axios from 'axios'

const initial = {
   user: {},
   isTyping: false,
   messages: [{
      id: 2,
      name: "Ana",
      type: "text",
      date: Date.now(),
      content: "Oi como vc esta?"
   },
   ]
}

const Types = {
   HANDLE_CHAT: 'chat/HANDLE_CHAT',
   CREATED_MESSAGE: 'chat/CREATED_MESSAGE'
}

export const Creators = {

   createMessage: (message) => {
      return {
         type: Types.CREATED_MESSAGE,
         payload: message
      }
   },
   handleChat: (user) => {
      return {
         type: Types.HANDLE_CHAT,
         payload: user
      }
   }
}

export default function (state = initial, action) {

   const { type, payload } = action

   switch (type) {
      case Types.HANDLE_CHAT:
         return {
            ...state,
            user: payload
         }
      case Types.CREATED_MESSAGE: 
         return {
            ...state,
            messages: [...state.messages, payload]
         }
       default:
         return state
   }
}