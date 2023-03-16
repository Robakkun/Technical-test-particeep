import _ from 'lodash';

import { SAVE_INITIAL_MOVIES_LIST, LIKE_OR_DISLIKE_A_MOVIE, REMOVE_A_MOVIE } from '../actions/movies';

export const initialState = {
};

//Function that will modify the store according to an action
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        //Here we initiate the first movies list, retrieve by the middleware
        case SAVE_INITIAL_MOVIES_LIST:
            return {
                movies: action.movies
            }

        //Update the store according to a click on the like button or dislike button
        case LIKE_OR_DISLIKE_A_MOVIE:
            const newMoviesList = _.map(state.movies, movie => {
                if (movie.id === action.movieId) {
                    if (_.isNil(movie.isLiked)) {
                        //If the user never clicked on the like or dislike button of the selected movie
                        if (action.liked) {
                            movie.likes += 1
                            movie.isLiked = true;
                        }
                        else {
                            movie.dislikes += 1;
                            movie.isLiked = false;
                        }
                    }
                    else {
                        //If the user update his rating on the selected movie
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

        //Update the store by removing the selected movie when the user clicks on the delete button
        case REMOVE_A_MOVIE:
            return {
                movies: _.reject(state.movies, movie => movie.id === action.movieId)
            }
        default:
            return state;
    }
};

export default reducer;
