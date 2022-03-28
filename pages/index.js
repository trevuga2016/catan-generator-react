import Head from 'next/head';
import { Header } from '../components/header/header';
import { GameSelect } from '../components/game-select/game-select';
import { Grid } from '@mui/material';

export const Home = () => {

  return (
    <Grid container direction="column">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <GameSelect />
      </Grid>
    </Grid>
  );
}

export default Home;
