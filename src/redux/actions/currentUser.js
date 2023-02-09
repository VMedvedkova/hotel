import * as type from '../types'

export function setUser(payload) {
    return {
        type: type.SET_USER,
        payload
    }
}

export function deleteUser() {
    return {
        type: type.DELETE_USER
    }
}

export function setAccessAllowed(payload) {
    return {
        type: type.SET_ACCESS_ALLOWED,
        payload
    }
}

export function showModal(payload) {
    return {
        type: type.SHOW_MODAL,
        payload
    }
}

