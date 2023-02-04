import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import roomsReducer from './roomsReducer';
import currentUser from './currentUser';
import accountsReducer from './accountsReducer';

const rootReducer = combineReducers({ 
    rooms: roomsReducer,
    accounts: accountsReducer,
    errors: errorsReducer,
    currentUser: currentUser
})

export default rootReducer