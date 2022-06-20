import { Avatar, Grid, Typography } from '@mui/material';
import { useResources } from '../../hooks/useResources';
import { useGameContext } from '../../contexts/game-context';
import styles from './stats-modal.module.scss';

export const ResourceStats = ({ stats }) => {

  const { resources } = useResources();
  const { scenario } = useGameContext();

  return (
    <>
      {
        stats?.map((stat, i) => {
          let icon;
          let commodity;
          let commodityIcon;

          resources?.forEach((r) => {
            if (stat?.resource === r?.resource) {
              icon = r?.icon;
              commodity = r?.commodity?.name;
              commodityIcon = r?.commodity?.icon;
            }
          });
          return(
            <Grid container direction="row" className={styles["modal__container__stats"]} key={i}>
              <Grid item xs={4}>
                <Grid container direction="row" justifyContent="center">
                  <Grid item px={0.5}>
                    {icon && <Avatar src={`https:${icon}?fm=webp`} title={stat?.resource}/>}
                  </Grid>
                  {
                    scenario?.scenarioUrl?.includes('ck') && commodityIcon &&
                    <Grid item px={0.5}>
                      {commodityIcon && <Avatar src={`https:${commodityIcon}?fm=webp`} title={commodity}/>}
                    </Grid>
                  }
                </Grid>
              </Grid>
              <Grid item xs alignSelf="center">
                {
                  scenario?.scenarioUrl?.includes('ck') && commodityIcon ?
                    <Typography variant="body1">Probability of {stat.resource}/{commodity}: {stat.probability}%</Typography> :
                    <Typography variant="body1">Probability of {stat.resource}: {stat.probability}%</Typography>
                }
              </Grid>
            </Grid>
          )
        })
      }
    </>
  );
}

ResourceStats.displayName = "ResourceStats";