import * as type from '../types'

const initialState = {
    errors: []
}

export default function errorsReducer(state = initialState, action) {
    switch (action.type) {
        case type.SET_DATA_FAILED:
            return {
                ...state,
                errors: action.payload
            }
        case type.HANDLE_UPDATE_ROOM_DATA_FAILED:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return {
                ...state
            }
    }
}