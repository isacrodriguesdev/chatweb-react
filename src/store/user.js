import axios from 'axios'

const initial = {
    name: "Isac S. Rodrigues Silva",
    email: "isac.sergio@outlook.com",
    photoUrl: "https://lh3.googleusercontent.com/a-/AAuE7mAy2cm5jbpX8w83xKNXs6xZRolle7bBF1BNZd6s=s96",
    status: 1,
    totalFriends: 3,
    totalOnline: 1
}

const Types = {
    GETED_USER: "GETED_USER",
    CHANGED_PHOTO: "user/CHANGED_PHOTO"
}

export const Creators = {

    getAuthUser: (token) => {
        return dispatch => {
            
        }
    },
    changePhoto: (id, photo) => {
        return {
            type: Types.CHANGED_PHOTO,
            payload: {id, photo}
        }
    }
}

export default function(state = initial, action) {

    const {type, payload} = action

    switch(type) {
        case Types.GETED_USER:
            return {...state, payload}
        case Types.CHANGED_PHOTO:
            return {...state, photoUrl: payload.photo}
        default:
            return state
    }
}