import Head from 'next/head';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import { Header } from '../components/header/header';
import { useTitleContext } from '../contexts/title-context';
import { useEffect } from 'react';

export const Custom404 = () => {

  const router = useRouter();
  const { setTitle } = useTitleContext();

  useEffect(() => {
    setTitle('404 - Page Not Found');
    if (typeof window !== "undefined") {
      document.getElementsByTagName("html").item(0).style.background = "url(../catan_backdrop.png) no-repeat center center fixed";
      document.getElementsByTagName("body").item(0).style.background = "url(../catan_backdrop.png) no-repeat center center fixed";
      document.getElementsByTagName("html").item(0).style.backgroundSize = "cover";
      document.getElementsByTagName("body").item(0).style.backgroundSize = "cover";
    }
  }, []);

  return(
    <Grid container direction="column" alignItems="center">
      <Head>
        <title>404 | Page Not Found</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item>
          <Header />
      </Grid>
      <Grid item mb={2}>
          The page you are looking for does not exist.
      </Grid>
      <Grid item mb={2}>
          <img src="/klaus.png"/>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'Gill Sans !important' }}>
          Home
        </Button>
      </Grid>
    </Grid>
    ); 
}

export default Custom404;

Custom404.displayName = 'Custom404';