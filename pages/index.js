import Head from 'next/head';
import { Header } from '../components/header/header';
import { GameSelect } from '../components/game-select/game-select';
import { Button, Grid } from '@mui/material';
import { ShareButtons } from '../components/share-buttons/share-buttons';
import styles from '../styles/home.module.scss';
import DescriptionIcon from '@mui/icons-material/Description';
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
        <Grid item>
          <GameSelect />
        </Grid>
        <Grid item pt={4} width="75%">
          <Button variant="contained" onClick={() => router.push('/scenario')} size="small" endIcon={<DescriptionIcon />} className={styles["scenario-selection"]}>
            Scenario Descriptions
          </Button>
        </Grid>
        <Grid item p={4} className={styles["share-buttons"]}>
          <ShareButtons />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
