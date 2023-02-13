export const getData = state => state.users.data;
export const getUser = state => state.currentUser.currentUser;
export const getAllUsers = state => state.accounts.accounts;
export const isAccessAllowed = state => state.currentUser.accessAllowed;
export const rooms = state => state.rooms.rooms;
export const modalState = state => state.currentUser.modalState;
export const getCurrentRoomData = state => state.rooms.currentRoomData;
export const updateRooms = state => state.rooms.updateRooms;


export const getAnswers = state => state.quizReducer.answers;
export const setCurrentQuestion = state => state.quizReducer.currentQuestion;
export const quizResult = state => state.quizReducer.quizResult;
export const resultsList = state => state.quizReducer.resultsList;
export const getScore = state => state.quizReducer.correctAnswerCount;
export const getCorrectAnswerCount = state => state.quizReducer.correctAnswerCount;
export const getMessage = state => state.chatReducer.userMessage;
export const getMessages = state => state.chatReducer.messages;

