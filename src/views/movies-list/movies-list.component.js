import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import { Row, Col } from 'react-grid-system';

import { Autocomplete, TextField, TablePagination, CircularProgress } from "@mui/material";

import { fetchInitialMoviesList } from "../../actions/movies";
import Card from "../../components/card";

import './moviesList.styles.css';

const MoviesList = () => {
    const moviesState = useSelector((state) => state.moviesReducer.movies);
    const dispatch = useDispatch();
    const initalStateLoaded = useRef(false);

    const [moviesList, setMoviesList] = useState([]);
    const [paginatedMoviesList, setPaginatedMoviesList] = useState([]);

    const [moviesPerPage, setMoviesPerPage] = useState(4);
    const [page, setPage] = useState(0);

    useEffect(() => {
        //If the state is empty and the movies has not been loaded, we call the middleware action to retrieve the list
        if (_.isEmpty(moviesState) && !initalStateLoaded.current) {
            dispatch(fetchInitialMoviesList());
            initalStateLoaded.current = true;
        }
        //If the movies has been stored in the store and for each store change we modify the state of the component
        else if (!_.isEmpty(moviesState)) {
            setMoviesList(moviesState);

            const moviesToDisplay = _.slice(moviesState, moviesPerPage * page, moviesPerPage * (page + 1));
            if (_.isEmpty(moviesToDisplay)) {
                //This code is used when the user delete all movies on another page than the first one
                //The previous page will be displayed instead of displaying a empty page
                setPaginatedMoviesList(_.slice(moviesState, moviesPerPage * (page - 1), moviesPerPage * page));
                setPage(page - 1);
            }
            else {
                setPaginatedMoviesList(moviesToDisplay);
            }
        }
        //If the user delete all the movies from the store, we reset the component state to it's initial value
        else {
            setMoviesList([]);
            setPaginatedMoviesList([]);
            setPage(0);
        }
    }, [moviesState])


    //Function that get categories without duplicates in order to suggest the categories in the filter component
    const getCategoriesList = () => {
        const categories = _.map(moviesState, movie => {
            return movie.category;
        })
        const categoriesWithoutDuplicates = _.filter(categories, (category, index) => categories.indexOf(category) === index);

        return categoriesWithoutDuplicates;
    }

    //Function that filter the displayed movies according to filter component value.
    const handleFilterChange = (event) => {
        const filteredMovies = _.filter(moviesState, movie => movie.category === event.target.innerText);

        if (_.isEmpty(event.target.innerText) && _.isEmpty(filteredMovies)) {
            setMoviesList(moviesState);
            setPaginatedMoviesList(_.slice(moviesState, 0, moviesPerPage));
        }
        else {
            setMoviesList(filteredMovies);
            setPaginatedMoviesList(_.slice(filteredMovies, 0, moviesPerPage));
        }
    }

    //Function that create a list of cards for all movies to display
    const getCardList = () => {
        return _.map(paginatedMoviesList, movie => {
            return (
                <Col xs="content">
                    <div data-testid="card">
                        <Card
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            img={movie.img}
                            category={movie.category}
                            likes={movie.likes}
                            dislikes={movie.dislikes}
                            isLiked={movie.isLiked}
                        />
                    </div>
                </Col>
            )
        })
    };

    //Those functions are used to update the movies list when the page is changed or when the limit of movies displayed is changed
    const handleChangePage = (event, newPage) => {
        const list = _.slice(moviesList, moviesPerPage * newPage, moviesPerPage * (newPage + 1));
        setPage(newPage)
        setPaginatedMoviesList(list);
    }

    const handleChangeMoviesPerPage = (event) => {
        const list = _.slice(moviesList, 0, event.target.value);
        setMoviesPerPage(event.target.value);
        setPaginatedMoviesList(list);
    }

    return (
        <>
            {_.isEmpty(moviesList) && !initalStateLoaded.current &&
                <div className="no-movie">
                    <CircularProgress />
                </div>
            }
            {_.isEmpty(moviesList) && initalStateLoaded.current &&
                <div className="no-movie">
                    There is no movie to display
                </div>
            }
            {!_.isEmpty(moviesList) &&
                <>
                    <div data-testid="filter" className="filter">
                        <Autocomplete
                            disablePortal
                            id="filter"
                            options={getCategoriesList()}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Category" />}
                            onChange={handleFilterChange}
                        />
                    </div>
                    <div className="list-container">
                        <Row>
                            {getCardList()}
                        </Row>
                    </div>
                    <div data-testid="pagination" className="pagination-container">
                        <TablePagination
                            component="div"
                            count={moviesList.length}
                            rowsPerPageOptions={[4, 8, 12]}
                            labelRowsPerPage="Movies per page :"
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={moviesPerPage}
                            onRowsPerPageChange={handleChangeMoviesPerPage}
                        />
                    </div>
                </>
            }
        </>
    )
}

export default MoviesList;