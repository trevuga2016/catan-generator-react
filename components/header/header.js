import {Grid, Typography} from '@mui/material';
import styles from './header.module.scss';
import { useRouter } from 'next/router';

export const Header = ({ title }) => {

  const router = useRouter();

  return (
      <Grid container py={3}>
          <Grid item>
              <Typography variant="h4" className={styles["header"]} onClick={() => router.push('/')}>
                  &#8213;&nbsp;{title}&nbsp;&#8213;
              </Typography>
          </Grid>
      </Grid>
  );
};

Header.displayName = 'Header';