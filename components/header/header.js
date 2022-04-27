import { Grid, Typography } from '@mui/material';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

export const Header = ({ title }) => {

    const router = useRouter();

    return(
      <Grid container className={styles["header"]}>
          <Typography variant="h4" className={styles["header__text"]} m={3} onClick={() => router.push('/')}>
              {title}
          </Typography>
      </Grid>
    );
};

Header.displayName = 'Header';