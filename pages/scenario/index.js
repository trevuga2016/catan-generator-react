import { Button, Grid } from '@mui/material';
import Head from 'next/head';
import { Header } from '../../components/header/header';
import { Scenarios } from '../../components/scenarios/scenarios';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';
import { ShareButtons } from '../../components/share-buttons/share-buttons';
import styles from './../../styles/home.module.scss';
import { useTitleContext } from '../../contexts/title-context';
import { useEffect } from 'react';
import { useBackgroundImage } from '../../hooks/useBackgroundImage';

export const ScenarioPage = () => {

  const router = useRouter();
  const { title, setTitle } = useTitleContext();
  const { setBackgroundImage } = useBackgroundImage();

  useEffect(() => {
    setTitle('Scenario Selection');
    setBackgroundImage('catan_backdrop.png');
  }, []);

  return(
    <Grid container direction="column" alignItems="center">
      <Head>
        <title>{title} | Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico"/>
      </Head>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Scenarios />
      </Grid>
      <Grid item p={4} className={styles["scenario-home"]}>
        <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} className={styles["scenario-home__button"]}>
          Home
        </Button>
      </Grid>
      <Grid item pb={4}>
        <ShareButtons />
      </Grid>
    </Grid>
  );
}

ScenarioPage.displayName = 'ScenarioPage';

export default ScenarioPage;