import Grid from '@mui/material/Grid';
import { CircularProgress, Skeleton } from '@mui/material';
import styles from './scenario-loading.module.scss';
import Head from 'next/head';

export const ScenarioLoading = () => {
  return(
    <Grid container direction="column" alignItems="center">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico"/>
      </Head>
      <Grid item>
        <Skeleton className={styles["title-skeleton"]} animation="wave" />
      </Grid>
      <Grid item p={10}>
        <CircularProgress />
      </Grid>
      <Grid container className={styles["button-skeleton"]}>
        <Grid item xs={6} md={3} p={1}>
          <Skeleton height="70px" animation="wave" />
        </Grid>
        <Grid item xs={6} md={3} p={1}>
          <Skeleton height="70px" animation="wave" />
        </Grid>
        <Grid item xs={6} md={3} p={1}>
          <Skeleton height="70px" animation="wave" />
        </Grid>
        <Grid item xs={6} md={3} p={1}>
          <Skeleton height="70px" animation="wave" />
        </Grid>
      </Grid>
    </Grid>
  );
}

ScenarioLoading.displayName = 'ScenarioLoading';