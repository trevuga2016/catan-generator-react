import Head from 'next/head';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { Footer } from '../components/footer/footer';

export default function Custom404() {

    const router = useRouter();

    return(
        <>
            <Head>
                <title>404 | Page Not Found</title>
                <link rel="icon" href="/catan-icon.ico" />
            </Head>
            <Grid container direction="column" align="center">
                <Grid item>
                    <h1>404 - Page Not Found</h1>
                </Grid>
                <Grid item mb={2}>
                    The page you are looking for does not exist.
                </Grid>
                <Grid item mb={2}>
                    <img src="/klaus.png"></img>
                </Grid>
                <Grid item>
                    <button type="button" onClick={() => router.push('/')}>Home</button>
                </Grid>
            </Grid>
            <Footer position="fixed"></Footer>
        </>
    ); 
}