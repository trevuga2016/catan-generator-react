import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from './game-select.module.scss';
import { useGameContext } from './game-context';
import { ScenarioSelect } from './scenario-select';
import { HarborSelect } from './harbor-select';
import ExploreIcon from '@mui/icons-material/Explore';

export const GameSelect = () => {

    const router = useRouter();
    const { scenario, setScenario, harbors, setHarbors } = useGameContext();

    const handleSubmit = () => {
        router.push(`/scenario/${scenario}?ports=${harbors}`);
    }

    useEffect(() => {
      setScenario('');
      setHarbors('hide');
    }, []);

    return(
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <ScenarioSelect />
          </Grid>
          <Grid item>
            <HarborSelect isDemo={scenario === 'demo'} />
          </Grid>
          <Grid item width="100%" p={1}>
              <Button variant="contained" onClick={handleSubmit} disabled={scenario === ''} size="small" endIcon={<AutorenewIcon />} className={styles["button"]}>
                Generate
              </Button>
          </Grid>
          <Grid item width="100%" p={1}>
            <Button variant="contained" onClick={() => router.push('/scenario')} disabled={scenario !== ''} size="small" endIcon={<ExploreIcon />} className={styles["button"]}>
              Scenario Selection
            </Button>
          </Grid>
        </Grid>
    );
}