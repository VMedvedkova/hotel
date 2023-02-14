export const getData = state => state.users.data;
export const getUser = state => state.currentUser.currentUser;
export const getAllUsers = state => state.accounts.accounts;
export const isAccessAllowed = state => state.currentUser.accessAllowed;
export const rooms = state => state.rooms.rooms;
export const modalState = state => state.currentUser.modalState;
export const getCurrentRoomData = state => state.rooms.currentRoomData;
export const updateRooms = state => state.rooms.updateRooms;

