import { put, select, call, spawn, takeLatest } from 'redux-saga/effects'
import * as type from '../types'
import * as selectors from '../selectors'
import { setDataRooms, updateRooms } from '../../firebase/index'
import { setDataRoomsInStore } from '../actions/rooms'

export function* handleSetData() {
    try {  
        const getDataRooms = yield call(setDataRooms)
        yield put(setDataRoomsInStore({rooms: getDataRooms, updateRooms: true}))   
    }
    catch {
        console.log('handleSetData error') 
        yield put({ type: type.SET_DATA_FAILED, payload: 'handleSetData error'})
    }
}

export function* handleUpdateRooms() {
    try {  
        const getCurrentRoom = yield select(selectors.getCurrentRoomData)
        yield updateRooms(getCurrentRoom) 
    }
    catch {
        console.log('handleUpdateRooms error') 
        yield put({ type: type.HANDLE_UPDATE_ROOM_DATA_FAILED, payload: 'handleUpdateRooms error'})
    }

}

export function* watchData() {
    yield takeLatest(type.SET_ROOMS, handleSetData)
};
export function* watchRooms() {
    yield takeLatest(type.UPDATE_ROOM_DATA, handleUpdateRooms)
};

export default function* roomsSaga() {
    yield spawn(watchData) 
    yield spawn(watchRooms)
}