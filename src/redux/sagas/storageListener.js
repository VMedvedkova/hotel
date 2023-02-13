
const storageKey = 'redux-local-tab-sync'

export function storageMiddleware() {
  return () => next => action => {
    if (!action.source) {
      const wrappedAction = Object.assign({ source: 'another tab' }, action)
      localStorage.setItem(storageKey, JSON.stringify(wrappedAction))
    }

    next(action)
  }
}

export function createStorageListener(store) {
    return () => {
      const wrappedAction = JSON.parse(localStorage.getItem(storageKey))
  
      delete wrappedAction.source
      store.dispatch(wrappedAction)
    }
  }