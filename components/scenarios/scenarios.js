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
      {
        scenarios?.map((entry) => {
          return(
            entry?.expansions?.map((entry, i) => {
              const expansion = entry?.fields;
              expansion.imageUrl = entry?.fields?.image?.fields?.file?.url;
              return(
                <Grid item xs={6} md={4} key={i}>
                  <ScenarioDetail scenario={expansion} />
                </Grid>
              );
            })
          );
        })
      }
    </Grid> :
    <CircularProgress />
  )
}

Scenarios.displayName = 'Scenarios';