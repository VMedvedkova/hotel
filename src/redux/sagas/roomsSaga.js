import { put, select, take, takeEvery, call, fork, spawn, delay, all } from 'redux-saga/effects'
import * as type from '../types'
import * as selectors from '../selectors'
import { setDataRooms } from '../../firebase/index'
import { setDataRoomsInStore } from '../actions/rooms'

export function* handleSetData() {
    try {  
        const getDataRooms = yield call(setDataRooms)
        yield put(setDataRoomsInStore(getDataRooms))   
    }
    catch {
        console.log('handleSetData error') 
        yield put({ type: type.SET_DATA_FAILED, payload: 'handleSetData error'})
    }
}

export function* watchData() {
    yield takeEvery(type.SET_DATA, handleSetData)
};

export default function* roomsSaga() {
    yield spawn(watchData) 
 }