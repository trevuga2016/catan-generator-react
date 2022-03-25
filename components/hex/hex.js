import { Box } from '@mui/material';
import styles from './hex.module.scss';
import { Token } from '../token/token';

export const Hex = ({ hex }) => {

    let resource = hex.resource;
    let token = hex.token;
    let portType = hex.port !== undefined ? hex.port.type : undefined;
    let rotation = hex.port !== undefined ? hex.port.rotation : undefined;
    let imageUrl = 'url(../sea_2.png)';
    let transform = 'rotate(0deg)';

    if (resource === 'Ore') {
        let background = 'ore_2.png';
        imageUrl = `url(../${background})`;
    } else if (resource === 'Wheat') {
        let background = 'wheat_2.png';
        imageUrl = `url(../${background})`;
    } else if (resource === 'Brick') {
        let background = 'brick_2.png';
        imageUrl = `url(../${background})`;
    } else if (resource === 'Wood') {
        let background = 'wood_2.png';
        imageUrl = `url(../${background})`;
    } else if (resource === 'Sheep') {
        let background = 'sheep_2.png';
        imageUrl = `url(../${background})`;
    } else if (resource === 'Desert') {
        let background = 'desert_2.png';
        imageUrl = `url(../${background})`;
    } else if (portType !== undefined) {
        let background = `${portType}.png`;
        imageUrl = `url(../${background})`;
    }

    if (rotation !== undefined) {
        transform = `rotate(${rotation})`;
    }
    
    return(
        <Box className={styles["hex"]} sx={{ backgroundImage: imageUrl, transform: transform }}>
            <Token number={token.number} probability={token.probability} />
        </Box>
    );
};

Hex.displayName = 'Hex';