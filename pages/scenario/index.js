import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Header } from '../../components/header/header';
import { useBackgroundProps } from '../../hooks/useBackgroundProps';
import { useRedirectPageContent } from '../../hooks/useRedirectPageContent';

export const Scenario = () => {

  const router = useRouter();
  const { setBackgroundImage, setBackgroundColor } = useBackgroundProps();
  const { redirectPageContent } = useRedirectPageContent();

  useEffect(() => {
    setBackgroundImage(redirectPageContent?.backgroundImage);
    setBackgroundColor(redirectPageContent?.backgroundColor);
    redirectPageContent?.redirectUrl ? router.push(`/${redirectPageContent?.redirectUrl}`) : router.push('/');
  });

  return(
    <>
      <Head>
        <title>{redirectPageContent?.title}</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid container direction="column" alignItems="center" position="absolute">
        <Grid item>
          <Header title={redirectPageContent?.title} />
        </Grid>
        <Grid item pb={2}>
          <Typography variant="h6">{redirectPageContent?.message}</Typography>
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