import * as type from '../types'

export function setDataRoomsInStore(payload) {
    return {
        type: type.SET_DATA_ROOMS,
        payload
    }
}
export function setRooms() {
    return {
        type: type.SET_ROOMS
    }
}
export function updateRoomData(payload) {
    return {
        type: type.UPDATE_ROOM_DATA,
        payload
    }
}