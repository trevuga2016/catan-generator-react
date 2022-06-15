import { Header } from '../components/header/header';
import { CircularProgress, Grid, Skeleton, Typography } from '@mui/material';
import { ShareButtons } from '../components/share-buttons/share-buttons';
import Head from 'next/head';
import { useBackgroundProps } from '../hooks/useBackgroundProps';
import { useEffect } from 'react';
import { useHomePageContent } from '../hooks/useHomePageContent';
import { Scenarios } from '../components/scenarios/scenarios';

export const Home = () => {

  const { setBackgroundImage, setBackgroundColor } = useBackgroundProps();
  const { homePageContent, isLoading } = useHomePageContent();

  useEffect(() => {
    setBackgroundImage(homePageContent?.backgroundImage);
    setBackgroundColor(homePageContent?.backgroundColor);
  });

  return(
    <Grid container direction="column" alignItems="center" position="absolute">
      <Head>
        <title>{homePageContent?.title}</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item>
        { !isLoading ? <Header title={homePageContent?.title} /> : <Skeleton variant="text" width="50vw" height={75} animation="wave" /> }
      </Grid>
      <Grid item pb={2} px={2} textAlign="center">
        { !isLoading ? <Typography variant="body1">{homePageContent?.description}</Typography> : <Skeleton variant="text" width="50vw" height={30} animation="wave" /> }
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
