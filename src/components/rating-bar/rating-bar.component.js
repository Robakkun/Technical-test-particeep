import Typography from '@mui/material/Typography';
import { Line } from 'rc-progress';

const RatingBar = ({ likes, dislikes }) => {

    const getLikesPercent = () => {
        return (likes / (likes + dislikes)) * 100;
    }

    const getDislikesPercent = () => {
        return (dislikes / (likes + dislikes)) * 100;
    }

    return (
        <>
            <Typography data-testid='likes-label' variant="body2" color="text.secondary">
                {"Likes :"}
            </Typography>
            <Line data-testid='likes-line' percent={getLikesPercent()} strokeColor="green" />
            <Typography data-testid='dislikes-label' variant="body2" color="text.secondary">
                {"Dislikes :"}
            </Typography>
            <Line data-testid='dislikes-line' percent={getDislikesPercent()} strokeColor="red" />
        </>
    );
}

export default RatingBar;