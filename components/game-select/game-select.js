import { Button, Grid, Skeleton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from './game-select.module.scss';
import { useGameContext } from './game-context';
import { ScenarioSelect } from './scenario-select';
import { HarborSelect } from './harbor-select';
import { useScenarioContext } from '../../contexts/scenario-context';

export const GameSelect = () => {

    const router = useRouter();
    const { scenario, setScenario, harbors, setHarbors } = useGameContext();
    const { scenarios, isLoading } = useScenarioContext();

    const handleSubmit = () => {
      const values = scenario.split(',');
      if (values.length > 1) {
        router.push(`/scenario/${values[0]}?ports=${harbors}&expansion=${values[1]}`);
      } else {
        router.push(`/scenario/${scenario}?ports=${harbors}`);
      }
    }

    useEffect(() => {
      setScenario('');
      setHarbors('hide');
    }, []);

    return(
      <Grid container direction="column">
        <fieldset className={styles["fieldset"]}>
            <Grid item px={1} pt={1}>
              { !isLoading ? <ScenarioSelect scenarios={scenarios} /> : <Skeleton width="100%" animation="wave" />}
            </Grid>
            <Grid item textAlign="center">
              { !isLoading ? <HarborSelect isDemo={scenario === 'demo'}/> : <Skeleton variant="rectangular" width={250} height={200} animation="wave" /> }
            </Grid>
            <Grid item width="100%" p={1}>
              <Button variant="contained" onClick={handleSubmit} disabled={scenario === ''} size="small" endIcon={<AutorenewIcon />} className={styles["button"]}>
                Generate
              </Button>
            </Grid>
        </fieldset>
      </Grid>
    );
}