import { createStore, applyMiddleware, compose } from 'redux'
import todoApp from './reducers';
import { logger } from 'redux-logger';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

const middleware = [logger, promise()];
const allStoreEnhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(todoApp, allStoreEnhancers);

export default store;