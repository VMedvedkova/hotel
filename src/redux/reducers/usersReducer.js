import * as type from '../types'

const initialState = {
    users: []
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case type.SET_DATA:
            return {
                ...state
            }
        case type.SET_DATA_ACCOUNTS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return {
                ...state
            }
    }
}