import Head from 'next/head';
import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { Footer } from '../components/footer/footer';
import HomeIcon from '@mui/icons-material/Home';
import { Header } from '../components/header/header';

export const Custom404 = () => {

    const router = useRouter();

    return(
        <>
            <Head>
                <title>404 | Page Not Found</title>
                <link rel="icon" href="/catan-icon.ico" />
            </Head>
            <Grid container direction="column" align="center">
                <Grid item>
                    <Header title='404 - Page Not Found' />
                </Grid>
                <Grid item mb={2}>
                    The page you are looking for does not exist.
                </Grid>
                <Grid item mb={2}>
                    <img src="/klaus.png"/>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'GillSans_Regular' }}>
                    Home
                  </Button>
                </Grid>
            </Grid>
            <Footer position="fixed"/>
        </>
    ); 
}

export default Custom404;

Custom404.displayName = 'Custom404';