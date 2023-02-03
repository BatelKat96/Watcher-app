import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { watcherReducer } from './reducers/watcher.reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    watcherModule: watcherReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// window.gStore = store