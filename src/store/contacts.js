import axios from 'axios'

const initial = {
   users: [{
      name: "Matheus Souza",
      id: 2,
      status: 1,
      chatId: 10,
   },
   {
      name: "Juliana Maria",
      id: 3,
      photoUrl: "https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.0-9/55604852_2005508002911820_5414181661044637696_n.jpg?_nc_cat=111&_nc_ht=scontent.fgyn11-1.fna&oh=b78f41966e342236382202b40e5ddbf0&oe=5D685D40", 
      status: 0,
      chatId: 11,
   }
]
}

const Types = {
   LISTED_CONTACTS: 'contacts/LISTED_CONTACTS'
}

export const Creators = {

   listUsers: (idIn) => {
      return dispatch => {

      }
   }
}

export default function(state = initial, action) {
   
   const {type, payload} = action

   switch(type) {
       case Types.LISTED_CONTACTS:
           return {}
       default:
           return state
   }
}
