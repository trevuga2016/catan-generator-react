import { Grid } from '@mui/material';
import styles from './scenarios.module.scss';
import { ScenarioDetail } from './scenario-detail';
import { ScenarioSkeleton } from './scenario-skeleton';
import { useScenarioContext } from '../../contexts/scenario-context';

export const Scenarios = () => {

  const { scenarios, isLoading } = useScenarioContext();

  if (isLoading) {
    return(
      <Grid container direction="row" className={styles["scenarios"]} spacing={2}>
        <Grid item xs={6} md={4}>
          <ScenarioSkeleton />
        </Grid>
        <Grid item xs={6} md={4}>
          <ScenarioSkeleton />
        </Grid>
        <Grid item xs={6} md={4}>
          <ScenarioSkeleton />
        </Grid>
        <Grid item xs={6} md={4}>
          <ScenarioSkeleton />
        </Grid>
        <Grid item xs={6} md={4}>
          <ScenarioSkeleton />
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
      {
        scenarios?.map((entry) => {
          return(
            entry?.expansions?.map((exp, i) => {
              const imageUrl = exp?.fields?.image?.fields?.file?.url;
              const pageUrl = [ entry?.pageUrl, exp?.fields?.expansionUrl ].toString();
              const expScenario = { ...exp?.fields, imageUrl: imageUrl, pageUrl: pageUrl };
              return(
                <Grid item xs={6} md={4} key={i}>
                  <ScenarioDetail scenario={expScenario} />
                </Grid>
              );
            })
          );
        })
      }
    </Grid>
  )
}

Scenarios.displayName = 'Scenarios';