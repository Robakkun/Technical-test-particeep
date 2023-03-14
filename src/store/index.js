import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import moviesMiddleware from '../middlewares/moviesMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        moviesMiddleware,
    ),
);

const store = createStore(reducer, enhancers);

export default store;
