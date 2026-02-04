import { CircularProgress, Grid } from '@mui/material';
import styles from './scenarios.module.scss';
import { ScenarioDetail } from './scenario-detail';
import { useScenariosContent } from '../../hooks/useScenariosContent';

export const Scenarios = () => {

  const { scenarios, isLoading } = useScenariosContent();

  return(
    !isLoading ?
    <Grid container className={styles["scenarios"]} spacing={2} pb={4}>
      {
        scenarios?.map((scenario, i) => {
          return(
            <Grid key={i}>
              <ScenarioDetail scenario={scenario} />
            </Grid>
          );
        })
      }
    </Grid> :
    <CircularProgress />
  )
}

Scenarios.displayName = 'Scenarios';