export const FETCH_INITIAL_MOVIES_LIST = 'FETCH_INITIAL_MOVIES_LIST';

export const SAVE_INITIAL_MOVIES_LIST = 'SAVE_INITIAL_MOVIES_LIST';

export const LIKE_OR_DISLIKE_A_MOVIE = 'LIKE_OR_DISLIKE_A_MOVIE';

export const REMOVE_A_MOVIE = 'REMOVE_A_MOVIE';

export const fetchInitialMoviesList = () => ({
    type: FETCH_INITIAL_MOVIES_LIST,
})

export const saveInitialMoviesList = (movies) => ({
    type: SAVE_INITIAL_MOVIES_LIST,
    movies: movies
})

export const likeMovie = (movieId) => ({
    type: LIKE_OR_DISLIKE_A_MOVIE,
    movieId,
    liked: true
})

export const dislikeMovie = (movieId) => ({
    type: LIKE_OR_DISLIKE_A_MOVIE,
    movieId,
    liked: false
})

export const removeMovie = (movieId) => ({
    type: REMOVE_A_MOVIE,
    movieId
})

