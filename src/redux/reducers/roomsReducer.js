import * as type from '../types'

const initialState = {
    rooms: [],
    updateRooms: false,
    currentRoomData: {}
}

export default function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case type.SET_ROOMS:
            return {
                ...state,
                updateRooms: false
            }
        case type.SET_DATA_ROOMS:
            return {
                ...state,
                rooms: action.payload.rooms,
                updateRooms: true
            }
        case type.UPDATE_ROOM_DATA:
            return { 
                ...state,
                currentRoomData: action.payload,
                rooms: state.rooms.map(room => room.id === action.payload.id ?
                    { ...room, 
                        guest: action.payload.guest,
                        isCheckedIn: action.payload.isCheckedIn,
                        checkOutDate: action.payload.checkOutDate
                    } : 
                    room
                )
              }
        default:
            return {
                ...state
            }
    }
}