import { FETCH_INITIAL_MOVIES_LIST, saveInitialMoviesList } from '../actions/movies';
import { movies$ } from '../data/movies';

import _ from 'lodash'

const moviesMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
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
