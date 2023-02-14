import { createStore, compose, applyMiddleware } from 'redux'
import rootReduser from '../reducers/index.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './index'

const saveToLocalStorage = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  };
  
  const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('state');
      return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = 
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const persistedStore = loadFromLocalStorage();

const configureStore = preloadedState => createStore(
    rootReduser,
    persistedStore,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

const store = configureStore({})

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

sagaMiddleware.run(rootSaga)

export default store
