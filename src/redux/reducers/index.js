import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import roomsReducer from './roomsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({ 
    rooms: roomsReducer,
    users: usersReducer,
    errors: errorsReducer
})

export default rootReducer