import { put, select, takeEvery, call, spawn } from 'redux-saga/effects'
import * as type from '../types'
import * as selectors from '../selectors'
import * as actions  from '../../firebase/index'
import { setDataAccountsInStore } from '../actions/accounts'
import { setAccessAllowed, showModal } from '../actions/currentUser'

export function* handleSetData() {
    try {
        const getDataAccounts = yield call(actions.setDataAccounts)
        yield put(setDataAccountsInStore(getDataAccounts)) 
    }
    catch {
        yield put({ type: type.SET_DATA_FAILED, payload: 'handleSetData error'})
    }
}
export function* handleCheckUser() {  
    try {
        const getNewUser = yield select(selectors.getUser)
        const getAllUsers = yield select(selectors.getAllUsers)
        const isUser = yield actions.checkNewUser(getNewUser, getAllUsers);
        console.log('isUser', isUser)
        yield put(showModal(!isUser))
        yield put(setAccessAllowed(isUser))

        
    }
    catch {
        yield put({ type: type.CHECK_USER_FAILED, payload: 'handleCheckUser error'})
    }
}

export function* watchData() { 
    yield takeEvery(type.SET_ACCOUNTS, handleSetData)
};

export function* watchUser() {
    yield takeEvery(type.SET_USER, handleCheckUser)
};

export default function* usersSaga() {
    yield spawn(watchData)
    yield spawn(watchUser) 
 }