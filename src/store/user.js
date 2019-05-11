import axios from 'axios'

const initial = {
    isLogged: false,
    id: 1,
    token: null,
    name: "Isac S. Rodrigues Silva",
    email: "isac.sergio@outlook.com",
    photoUrl: "https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.0-9/55604852_2005508002911820_5414181661044637696_n.jpg?_nc_cat=111&_nc_ht=scontent.fgyn11-1.fna&oh=b78f41966e342236382202b40e5ddbf0&oe=5D685D40",
    status: 1,
}

const Types = {
    LOGGED_SYSTEM: 'user/LOGGED_SYSTEM'
}

export const Creators = {
    
}

export default function(state = initial, action) {

    const {type, payload} = action

    switch(type) {
        case Types.LOGGED_SYSTEM:
            return {...state, isLogged: true}
        default:
            return state
    }
}