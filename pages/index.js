import Head from 'next/head';
import { Header } from '../components/header/header';
import { GameSelect } from '../components/game-select/game-select';
import { Button, Grid } from '@mui/material';
import { ShareButtons } from '../components/share-buttons/share-buttons';
import styles from '../styles/home.module.scss';
import ExploreIcon from '@mui/icons-material/Explore';
import { useRouter } from 'next/router';

export const Home = () => {

  const router = useRouter();

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
        <Grid item pb={4} width="75%">
          <Button variant="contained" onClick={() => router.push('/scenario')} size="small" endIcon={<ExploreIcon />} className={styles["scenario-selection"]}>
            Select a Scenario
          </Button>
        </Grid>
        <Grid item>
          <GameSelect />
        </Grid>
        <Grid item p={4} className={styles["share-buttons"]}>
          <ShareButtons />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
