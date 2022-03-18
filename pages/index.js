import Head from 'next/head';
import { Header } from '../components/header/header';
import { GameSelect } from '../components/game-select/game-select';
import { Footer } from '../components/footer/footer';
import { Grid } from '@mui/material';

export const Home = () => {

  return (
    <Grid container direction="column" className="container">
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Header />
      <GameSelect />
      <Footer />
    </Grid>
  );
}

export default Home;
