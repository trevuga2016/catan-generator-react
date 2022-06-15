import { CircularProgress, Grid } from '@mui/material';
import styles from './scenarios.module.scss';
import { ScenarioDetail } from './scenario-detail';
import { useScenariosContent } from '../../hooks/useScenariosContent';

export const Scenarios = () => {

  const { scenarios, isLoading } = useScenariosContent();

  return(
    !isLoading ?
    <Grid container direction="row" className={styles["scenarios"]} spacing={2}>
      {
        scenarios?.map((scenario, i) => {
          return(
            <Grid item xs={6} md={4} key={i}>
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