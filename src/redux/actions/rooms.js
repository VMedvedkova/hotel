import * as type from '../types'

export function setDataRoomsInStore(payload) {
    return {
        type: type.SET_DATA_ROOMS,
        payload
    }
}