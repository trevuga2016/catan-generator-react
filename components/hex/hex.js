import { Box } from '@mui/material';
import styles from '../../styles/hex.module.scss';
import { Token } from '../token/token';

export const Hex = ({ hex }) => {
    let resource = hex.resource;
    let token = hex.token;
    let imageUrl = 'url(../sea_2.png)';

    if (resource == 'Ore') {
        let background = 'ore_2.png';
        imageUrl = `url(../${background})`
    } else if (resource == 'Wheat') {
        let background = 'wheat_2.png';
        imageUrl = `url(../${background})`
    } else if (resource == 'Brick') {
        let background = 'brick_2.png';
        imageUrl = `url(../${background})`
    } else if (resource == 'Wood') {
        let background = 'wood_2.png';
        imageUrl = `url(../${background})`
    } else if (resource == 'Sheep') {
        let background = 'sheep_2.png';
        imageUrl = `url(../${background})`
    } else if (resource == 'Desert') {
        let background = 'desert_2.png';
        imageUrl = `url(../${background})`
    }
    
    return(
        <Box className={styles["hex"]} sx={{ backgroundImage: imageUrl, backgroundSize: "contain" }}>
            <Token number={token.number} probability={token.probability}></Token>
        </Box>
    );
};

Hex.displayName = 'Hex';