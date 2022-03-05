import { Box } from '@mui/material';
import styles from '../../styles/hex.module.scss';
import { Token } from '../token/token';

export const Hex = () => {
    return(
        <Box className={styles["hex"]}>
            <Token></Token>
        </Box>
    );
};

Hex.displayName = 'Hex';