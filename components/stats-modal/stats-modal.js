import { Avatar, Box, Grid, ListItem, ListItemAvatar, ListItemText, Modal, Typography } from '@mui/material';
import styles from './stats-modal.module.scss';
import { useResources } from '../../hooks/useResources';

export const StatsModal = ({open, onClose, stats}) => {

  const {resources} = useResources();
  const maResources = [stats?.[0]?.resource];
  const highestProb = stats?.[0]?.probability;
  const laResources = [stats?.[stats?.length - 1]?.resource];
  const lowestProb = stats?.[stats?.length - 1]?.probability;

  stats?.forEach((stat, i) => {
    if (i > 0 && stat?.probability === highestProb) {
      maResources.push(stat?.resource);
    }
  });

  for (let i = stats?.length - 1; i >= 0; i--) {
    if (i < stats?.length - 1 && stats?.[i]?.probability === lowestProb) {
      laResources.push(stats[i].resource);
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles["modal"]}>
        <Grid container direction="column" className={styles["modal__container"]} p={5}>
          <Typography variant="h4">&#8213;&nbsp;Board Statistics&nbsp;&#8213;</Typography>
          <Typography variant="h6">Probability of Collecting Resource per Turn</Typography>
          <Grid container direction="column" className={styles["modal__container__stats"]}>
            {
              stats?.map((stat, i) => {
                let icon;
                resources?.forEach((r) => {
                  if (stat?.resource === r?.resource) {
                    icon = r?.icon;
                  }
                });
                return (
                  <Grid item key={i}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={`https:${icon}`} title={stat?.resource}/>
                      </ListItemAvatar>
                      <ListItemText>
                        <Typography variant="h6">Probability of {stat.resource}: {stat.probability}%</Typography>
                      </ListItemText>
                    </ListItem>
                  </Grid>
                );
              })
            }
          </Grid>
          {
            highestProb !== '0.000' &&
            <>
              <Typography variant="h6">The Most Abundant Resource{maResources.length > 1 ? 's:' : ':'}</Typography>
              <Grid container direction="row" className={styles["modal__container__freq"]}>
                {
                  maResources.map((resource, i) => {
                    let icon;
                    resources?.forEach((r) => {
                      if (resource === r?.resource) {
                        icon = r?.icon;
                      }
                    });
                    return (
                      <Grid item key={i}>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar src={`https:${icon}`} title={resource} />
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography variant="h6">{resource}</Typography>
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </>
          }
          {
            lowestProb !== '0.000' &&
            <>
              <Typography variant="h6">The Least Abundant Resource{laResources.length > 1 ? 's:' : ':'}</Typography>
              <Grid container direction="row" className={styles["modal__container__freq"]}>
                {
                  laResources.map((resource, i) => {
                    let icon;
                    resources?.forEach((r) => {
                      if (resource === r?.resource) {
                        icon = r?.icon;
                      }
                    });
                    return (
                      <Grid item key={i}>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar src={`https:${icon}`} title={resource} />
                          </ListItemAvatar>
                          <ListItemText>
                            <Typography variant="h6">{resource}</Typography>
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </>
          }
        </Grid>
      </Box>
    </Modal>
  );
}

StatsModal.displayName = 'StatsModal';