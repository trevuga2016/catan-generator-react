import { Grid } from '@mui/material';
import styles from './scenarios.module.scss';
import { ScenarioDetail } from './scenario-detail';
import { useGameDescriptions } from '../../hooks/useGameDescriptions';

export const Scenarios = () => {

  const { descriptions } = useGameDescriptions();

  return(
    <Grid container direction="row" className={styles["scenarios"]} spacing={2}>
      {
        descriptions?.map((description, i) => {
          return(
            <Grid item xs={6} md={4} key={i}>
              <ScenarioDetail title={description?.title} subtitle={description?.subtitle} />
            </Grid>
          );
        })
      }
    </Grid>
  )
}

Scenarios.displayName = 'Scenarios';