import * as type from '../types'

const initialState = {
    rooms: []
}

export default function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case type.SET_DATA_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }
        default:
            return {
                ...state
            }
    }
}