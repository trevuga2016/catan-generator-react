import { Grid } from '@mui/material';
import styles from './footer.module.scss';

export const Footer = () => {
    return(
        <Grid container className={styles["footer"]}>
              2022 &copy; Trevor Richardson
        </Grid>
    );
}

Footer.displayName = 'Footer';

