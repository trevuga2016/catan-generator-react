import { Box, Grid } from '@mui/material';
import styles from './token.module.scss'

export const Token = ({ number, probability }) => {

    const color = number === '6' || number === '8' ? 'red' : 'black';

    return (
        number !== '' &&
        <Box className={styles["token"]}>
            <Grid container direction="column">
                <Grid item className={styles["token-text"]} sx={{ color: color }}>
                    {number}
                </Grid>
                <Grid item className={styles["token-prob"]} sx={{ color: color }}>
                    {probability}
                </Grid>
            </Grid>
        </Box>
    )
}

Token.displayName = 'Token';