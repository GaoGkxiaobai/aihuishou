import { createStore,applyMiddleware,compose } from 'redux'
import reducer from './Reducers'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
        
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxPromise,reduxThunk)))
// const store = createStore(reducer,applyMiddleware(reduxPromise,reduxThunk))

export default store