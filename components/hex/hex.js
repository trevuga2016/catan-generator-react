import { Box } from '@mui/material';
import styles from '../../styles/hex.module.scss';
import { Token } from '../token/token';

export const Hex = ({ hex }) => {
    let token = hex.token;
    
    return(
        <Box className={styles["hex"]}>
            <Token number={token.number} probability={token.probability}></Token>
        </Box>
    );
};

Hex.displayName = 'Hex';