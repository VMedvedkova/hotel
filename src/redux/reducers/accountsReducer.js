import * as type from '../types'

const initialState = {
    accounts: []
}

export default function accountsReducer(state = initialState, action) {
    switch (action.type) {
        case type.SET_ACCOUNTS:
            return {
                ...state
            }
        case type.SET_DATA_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        default:
            return {
                ...state
            }
    }
}