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
            <Typography variant="body2" color="text.secondary">
                {"Likes :"}
            </Typography>
            <Line percent={getLikesPercent()} strokeColor="green" />
            <Typography variant="body2" color="text.secondary">
                {"Dislikes :"}
            </Typography>
            <Line percent={getDislikesPercent()} strokeColor="red" />
        </>
    );
}

export default RatingBar;