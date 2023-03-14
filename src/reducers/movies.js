import _ from 'lodash';

import { LIKE_OR_DISLIKE_A_MOVIE, REMOVE_A_MOVIE } from '../actions/movies';
import { movies$ } from '../data/movies';

export const initialState = {
    movies: await movies$,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LIKE_OR_DISLIKE_A_MOVIE:
            const newMoviesList = _.map(state.movies, movie => {
                if (movie.id === action.movieId) {
                    if (_.isNil(movie.isLiked)) {
                        action.liked ? movie.likes += 1 : movie.dislikes += 1;
                    }
                    else {
                        if (movie.isLiked && !action.liked) {
                            movie.likes -= 1;
                            movie.dislikes += 1;
                        }
                        else if (!movie.isLiked && action.liked) {
                            movie.likes += 1;
                            movie.dislikes -= 1;
                        }
                        movie.isLiked = !movie.isLiked;
                    }
                }

                return movie;
            })

            return {
                ...state,
                movies: newMoviesList,
            };

        case REMOVE_A_MOVIE:
            return {
                ...state,
                movies: _.reject(state.movies, movie => movie.id === action.movieId)
            }
        default:
            return state;
    }
};

export default reducer;
