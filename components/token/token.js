import { Box, Grid } from '@mui/material';
import styles from '../../styles/token.module.scss'

export const Token = ({ number, probability }) => {
    return (
        <Box className={styles["token"]}>
            <Grid container direction="column">
                <Grid item className={styles["token-text"]}>
                    {number}
                </Grid>
                <Grid item className={styles["token-prob"]}>
                    {probability}
                </Grid>
            </Grid>
        </Box>
    )
}

Token.displayName = 'Token';