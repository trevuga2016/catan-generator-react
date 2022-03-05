import { Box, Grid } from '@mui/material';
import styles from '../../styles/token.module.scss'

export const Token = () => {
    return (
        <Box className={styles["token"]}>
            <Grid container direction="column">
                <Grid item className={styles["token-text"]}>
                    8
                </Grid>
                <Grid item className={styles["token-prob"]}>
                    &#8226;&#8226;&#8226;&#8226;&#8226;
                </Grid>
            </Grid>
        </Box>
    )
}

Token.displayName = 'Token';