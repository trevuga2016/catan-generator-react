import Head from 'next/head';
import { Header } from '../components/header/header';
import { Grid, Typography } from '@mui/material';
import { ShareButtons } from '../components/share-buttons/share-buttons';
import styles from '../styles/home.module.scss';
import { Scenarios } from '../components/scenarios/scenarios';

export const Home = () => {
  return (
    <Grid container justifyContent="center">
      <Grid container direction="column" alignItems="center" width="max-content">
        <Head>
          <title>Catan Board Generator</title>
          <link rel="icon" href="/catan-icon.ico" />
        </Head>
        <Grid item>
          <Header title='Catan Board Generator' />
        </Grid>
        <Grid item pb={2}>
          <Typography variant="body1">Select a Scenario:</Typography>
        </Grid>
        <Grid item>
          <Scenarios />
        </Grid>
        <Grid item p={4} className={styles["share-buttons"]}>
          <ShareButtons />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
