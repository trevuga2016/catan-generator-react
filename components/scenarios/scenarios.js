import { Divider, Grid, Skeleton } from '@mui/material';
import styles from './scenarios.module.scss';
import { ScenarioDetail } from './scenario-detail';
import { useScenarioContent } from '../../hooks/useScenarioContent';

export const Scenarios = () => {

  const { scenarios, isLoading } = useScenarioContent();

  if (isLoading) {
    return(
      <Grid container direction="row" className={styles["scenarios"]} spacing={2}>
        <Grid item xs={6} md={4}>
          <Grid container direction="column" className={styles["detail"]}>
            <Grid item>
              <Skeleton animation="wave" height={150} />
            </Grid>
            <Grid item pt={1}>
              <Skeleton animation="wave" />
            </Grid>
            <Grid item pt={1}>
              <Divider variant="middle" />
            </Grid>
            <Grid item p={1}>
              <Skeleton animation="wave" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return(
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
    </Grid>
  )
}

Scenarios.displayName = 'Scenarios';