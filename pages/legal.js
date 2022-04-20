import Head from 'next/head';
import { Button, Grid, Link } from '@mui/material';
import { Header } from '../components/header/header';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

export const Legal = () => {

    const router = useRouter();

    return(
        <Grid container direction="column" alignItems="center" spacing={2} textAlign="center">
            <Head>
                <title>Legal | Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico" />
            </Head>
            <Grid item xs={12}>
                <Header title='Legal' />
            </Grid>
            <Grid item xs={12}>
                The contents of this application are original work and are not to be used without permission.
            </Grid>
            <Grid item xs={12}>
                All Catan images, names, and associated likenesses are licensed trademarks of <Link href="https://www.catan.com/">Catan GmbH and Catan Studio</Link>.
            </Grid>
            <Grid item xs={12}>
                Check out the project over on <Link href="https://github.com/trevuga2016/catan-generator-react">GitHub</Link>!
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'GillSans_Regular' }}>
                  Home
                </Button>
            </Grid>
        </Grid>
    );
}

export default Legal;

Legal.displayName = 'Legal';