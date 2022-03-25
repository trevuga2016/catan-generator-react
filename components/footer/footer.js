import { AppBar, Grid, Typography } from '@mui/material';
import styles from './footer.module.scss';

export const Footer = () => {
    return(
      <AppBar className={styles["footer"]}>
        <Grid container className={styles["footer__grid"]}>
          <Grid item>
            <Typography variant="body2" className={styles["footer__color"]}>
              2022 &copy; Trevor Richardson
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    );
}

Footer.displayName = 'Footer';

