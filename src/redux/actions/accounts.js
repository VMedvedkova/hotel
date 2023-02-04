import * as type from '../types'

export function setDataAccountsInStore(payload) {
    return {
        type: type.SET_DATA_ACCOUNTS,
        payload
    }
}

export function setData() {
    return {
        type: type.SET_DATA
    }
}

