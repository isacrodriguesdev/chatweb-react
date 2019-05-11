import axios from 'axios'

const initial = {
   chatId: 10,
   messages: [{
      id: 2,
      name: "Matheus Souza",
      type: "text",
      date: Date.now(),
      content: "Oi como vc esta?"
   },
   {
      id: 1,
      type: "text",
      date: Date.now(),
      content: "Estou de boa"
   }
   ]
}

const Types = {
   STARTED_CHAT: 'chat/STARTED_CHAT',
   CREATED_MESSAGE: 'chat/CREATED_MESSAGE'
}

export const Creators = {

   createMessage: (message) => {
      return {
         type: Types.CREATED_MESSAGE,
         payload: message
      }
   }
}

export default function (state = initial, action) {

   const { type, payload } = action

   switch (type) {
      case Types.STARTED_CHAT:
         return {}
      case Types.CREATED_MESSAGE: 
         return {
            ...state,
            messages: [...state.messages, payload]
         }
       default:
         return state
   }
}