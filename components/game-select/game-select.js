import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from './game-select.module.scss';
import { useGameContext } from './game-context';
import { ScenarioSelect } from './scenario-select';
import { HarborSelect } from './harbor-select';

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
      <Grid container direction="column">
        <fieldset>
          <legend>&nbsp;Quick Select:&nbsp;</legend>
          <Grid item px={1} pt={1}>
            <ScenarioSelect />
          </Grid>
          <Grid item textAlign="center">
            <HarborSelect isDemo={scenario === 'demo'} />
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