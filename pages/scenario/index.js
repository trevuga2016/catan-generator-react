import { Button, Grid } from '@mui/material';
import Head from 'next/head';
import { Header } from '../../components/header/header';
import { Scenarios } from '../../components/scenarios/scenarios';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router';

export const ScenarioPage = () => {

  const title = 'Scenario Selection';
  const router = useRouter();

  return(
    <Grid container direction="column" alignItems="center">
      <Head>
        <title>{title} | Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico"/>
      </Head>
      <Grid item>
        <Header title={title} />
      </Grid>
      <Grid item>
        <Scenarios />
      </Grid>
      <Grid item p={3}>
        <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} sx={{ fontFamily: 'Gill Sans !important', border: '1px solid #E7E2AB' }}>
          Home
        </Button>
      </Grid>
    </Grid>
  );
}

ScenarioPage.displayName = 'ScenarioPage';

export default ScenarioPage;