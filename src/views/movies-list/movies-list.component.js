import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from 'lodash';
import { Row, Col } from 'react-grid-system';

import { fetchInitialMoviesList } from "../../actions/movies";
import Card from "../../components/card";

import './moviesList.styles.css';

const MoviesList = () => {
    const moviesState = useSelector((state) => state.moviesReducer.movies);
    const dispatch = useDispatch();

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        if (_.isEmpty(moviesState)) {
            dispatch(fetchInitialMoviesList());
        }
        else {
            setMoviesList(moviesState);
        }
    }, [moviesState])

    const getCardList = () => {
        return _.map(moviesList, movie => {
            return (
                <Col xs="content">
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
                </Col>
            )
        })
    };

    return (
        <>
            {!_.isEmpty(moviesList) &&
                <div className="container">
                    <Row>
                        {getCardList()}
                    </Row>
                </div>
            }
        </>
    )
}

export default MoviesList;