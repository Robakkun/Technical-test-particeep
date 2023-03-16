import * as React from 'react';
import { useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Typography from '@mui/material/Typography';

import RatingBar from '../rating-bar';

import { removeMovie, likeMovie, dislikeMovie } from '../../actions/movies';

import './card.styles.css';

const MovieCard = ({ id, title, img, category, likes, dislikes, isLiked }) => {
    const dispatch = useDispatch();

    //Here the function that will be called when a specific button is clicked. There are calling update store functions.
    const handleDelete = () => {
        dispatch(removeMovie(id));
    }

    const handleLike = () => {
        dispatch(likeMovie(id));
    }

    const handleDislike = () => {
        dispatch(dislikeMovie(id));
    }

    return (
        <div className='card'>
            <Card data-testid='card' sx={{ minWidth: 255, maxWidth: 300 }}>
                <CardMedia
                    data-testid='img'
                    component="img"
                    alt={title}
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography data-testid='title' gutterBottom variant="h6" component="div">
                        <strong>{title}</strong>
                    </Typography>
                    <Typography data-testid='category' gutterBottom variant="body1">
                        {category}
                    </Typography>
                    <div data-testid='rating-bar'>
                        <RatingBar likes={likes} dislikes={dislikes} />
                    </div>
                </CardContent>
                <CardActions>
                    <ButtonGroup size="small" >
                        <Button data-testid='delete-button' key="deleteMovie" onClick={handleDelete} startIcon={<DeleteIcon />}>
                            Supprimer
                        </Button>
                        <Button data-testid='like-button' key="like" onClick={handleLike}>
                            <ThumbUpIcon
                                color={isLiked ? "success" : "disabled"}
                            />
                        </Button>
                        <Button data-testid='dislike-button' key="dislike" onClick={handleDislike}>
                            <ThumbDownIcon
                                color={!isLiked && isLiked !== undefined ? "error" : "disabled"}
                            />
                        </Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </div>
    );
};

export default MovieCard;