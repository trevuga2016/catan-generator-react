import { Header } from '../components/header/header';
import { CircularProgress, Grid, Skeleton, Typography } from '@mui/material';
import { ShareButtons } from '../components/share-buttons/share-buttons';
import Head from 'next/head';
import { useTitleContext } from '../contexts/title-context';
import { useBackgroundImage } from '../hooks/useBackgroundImage';
import { useEffect } from 'react';
import { usePageDefaults } from "../hooks/usePageDefaults";
import { Scenarios } from '../components/scenarios/scenarios';

export const Home = () => {

  const { title, setTitle } = useTitleContext();
  const { setBackgroundImage } = useBackgroundImage();
  const { pageDefaults, isLoading } = usePageDefaults();

  useEffect(() => {
    setTitle(pageDefaults?.title);
    setBackgroundImage('catan_backdrop.webp');
  });

  return(
    <Grid container direction="column" alignItems="center" position="absolute">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item>
        { !isLoading ? <Header /> : <Skeleton variant="text" width="50vw" height={75} animation="wave" /> }
      </Grid>
      <Grid item pb={2} px={2} textAlign="center">
        { !isLoading ? <Typography variant="body1">{pageDefaults?.description}</Typography> : <Skeleton variant="text" width="50vw" height={30} animation="wave" /> }
      </Grid>
      <Grid item>
        { !isLoading ? <Scenarios /> : <CircularProgress /> }
      </Grid>
      <Grid item p={4}>
        <ShareButtons />
      </Grid>
    </Grid>
  );
}

export default Home;
