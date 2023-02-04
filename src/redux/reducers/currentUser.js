import * as type from '../types'

const initialState = {
    currentUser: {},
    accessAllowed: false
}

export default function currentUser(state = initialState, action) {
    switch (action.type) {
        case type.SET_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case type.DELETE_USER:
            return {
                ...state,
                currentUser: initialState.currentUser
            }        
        case type.SET_ACCESS_ALLOWED:
            return {
                ...state,
                accessAllowed: action.payload
            }
        default:
            return {
                ...state
            }
    }
}