import _ from 'lodash';

import { SAVE_INITIAL_MOVIES_LIST, LIKE_OR_DISLIKE_A_MOVIE, REMOVE_A_MOVIE } from '../actions/movies';

export const initialState = {
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_INITIAL_MOVIES_LIST:
            return {
                movies: action.movies
            }
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
                movies: newMoviesList
            };

        case REMOVE_A_MOVIE:
            return {
                movies: _.reject(state.movies, movie => movie.id === action.movieId)
            }
        default:
            return state;
    }
};

export default reducer;
