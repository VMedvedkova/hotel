import { put, select, take, takeEvery, call, fork, spawn, delay, all } from 'redux-saga/effects'
import * as type from '../types'
import * as selectors from '../selectors'
import { setDataAccounts } from '../../firebase/index'
import { setDataAccountsInStore } from '../actions/users'

export function* handleSetData() {
    try {
        const getDataAccounts = yield call(setDataAccounts)
        console.log('getDataAccounts', getDataAccounts)
        yield put(setDataAccountsInStore(getDataAccounts)) 
    }
    catch {
        yield put({ type: type.SET_DATA_FAILED, payload: 'handleSetData error'})
    }
}

export function* watchData() {
    // yield all([
    //     takeEvery(type.SET_DATA, handleSetData)
    // ]);
    yield takeEvery(type.SET_DATA, handleSetData)
};

export default function* usersSaga() {
    yield spawn(watchData) 
 }