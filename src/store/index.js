//Redux Imports
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

//Middleware Imports
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//Reducers
import card from './card';

//Combines Reducers into one reducer
const rootReducer = combineReducers({
    card,
});

let enhancer;

// If we're in production, no devTools or loggers.
if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    // Otherwise we can use anything we need for development
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// Define Store
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
