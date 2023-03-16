import { FETCH_INITIAL_MOVIES_LIST, saveInitialMoviesList } from '../actions/movies';
import { movies$ } from '../data/movies';

import _ from 'lodash'

//Function of store that get caught before reducers process. This is used to do async process like calling an API to generate or update the store
const moviesMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        //Here I retrieve async movies
        case FETCH_INITIAL_MOVIES_LIST:
            const movies = await movies$;
            if (!_.isEmpty(movies)) {
                store.dispatch(saveInitialMoviesList(movies));
            }
            break;
        default:
    }
    next(action);
};

export default moviesMiddleware;
