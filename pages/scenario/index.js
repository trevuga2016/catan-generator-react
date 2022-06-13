import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Header } from '../../components/header/header';
import { useTitleContext } from '../../contexts/title-context';
import { useBackgroundProps } from '../../hooks/useBackgroundProps';

export const Scenario = () => {

  const router = useRouter();
  const { setTitle } = useTitleContext();
  const { setBackgroundImage } = useBackgroundProps();

  useEffect(() => {
    setTitle('Catan Board Generator');
    setBackgroundImage('catan_backdrop.webp');
    router.push('/');
  });

  return(
    <>
      <Head>
        <title>Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid container direction="column" alignItems="center" position="absolute">
        <Grid item>
          <Header />
        </Grid>
        <Grid item pb={2}>
          <Typography variant="h6">Redirecting...</Typography>
        </Grid>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    </>
  );
}

export default Scenario;

Scenario.displayName = 'Scenario';