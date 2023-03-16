import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';

//On a big project we can used multiple reducers and fuse them before, giving them to the store.
const rootReducer = combineReducers({
    moviesReducer: moviesReducer,
});

export default rootReducer;
