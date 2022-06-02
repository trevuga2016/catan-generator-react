import Head from 'next/head';
import { Button, Grid, Link } from '@mui/material';
import { Header } from '../components/header/header';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import { useTitleContext } from '../contexts/title-context';
import { useEffect } from 'react';

export const Legal = () => {

  const router = useRouter();
  const { setTitle } = useTitleContext();

  useEffect(() => {
    setTitle('Legal');
  }, []);

  return(
    <Grid container direction="column" alignItems="center" spacing={2} textAlign="center">
      <Head>
        <title>Legal | Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico" />
      </Head>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        The contents of this application are original work and are not to be used without permission.
      </Grid>
      <Grid item xs={12}>
        All Catan images, names, and associated likenesses are licensed trademarks of&nbsp;
        <Link href="https://www.catan.com/" color="secondary">Catan GmbH and Catan Studio</Link>.
      </Grid>
      <Grid item xs={12}>
        Check out the project over on&nbsp;
        <Link href="https://github.com/trevuga2016/catan-generator-react" color="secondary">GitHub</Link>!
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'Gill Sans !important' }}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
}

export default Legal;

Legal.displayName = 'Legal';