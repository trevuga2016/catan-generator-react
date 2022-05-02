import { Grid } from '@mui/material';
import Head from 'next/head';
import { Header } from '../../components/header/header';

export const ScenarioPage = () => {

  const title = 'Scenario Selection';

  return(
    <Grid container direction="column" alignItems="center">
      <Head>
        <title>{title} | Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico"/>
      </Head>
      <Grid item >
        <Header title={title} />
      </Grid>
    </Grid>
  );
}

ScenarioPage.displayName = 'ScenarioPage';

export default ScenarioPage;