import { Grid, Typography } from '@mui/material';
import styles from './footer.module.scss';

export const Footer = () => {
    return(
        <Grid container className={styles["footer"]}>
            <Typography variant="body2" className={styles["footer__color"]}>
              2022 &copy; Trevor Richardson
            </Typography>
        </Grid>
    );
}

Footer.displayName = 'Footer';

