import Head from 'next/head';
import { Header } from '../components/header/header';
import { GameSelect } from '../components/game-select/game-select';
import { Grid } from '@mui/material';
import { ShareButtons } from '../components/share-buttons/share-buttons';
import styles from '../styles/home.module.scss';

export const Home = () => {

  return (
    <Grid container direction="column" alignItems="center">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item>
        <Header title='Catan Board Generator' />
      </Grid>
      <Grid item>
        <GameSelect />
      </Grid>
      <Grid item className={styles["share-buttons"]}>
        <ShareButtons />
      </Grid>
    </Grid>
  );
}

export default Home;
