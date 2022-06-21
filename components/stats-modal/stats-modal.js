import { Box, Grid, Modal, Typography } from '@mui/material';
import styles from './stats-modal.module.scss';
import { ResourceStats } from './resource-stats';
import { useResources } from '../../hooks/useResources';

export const StatsModal = ({ open, onClose, stats }) => {

  const { resources } = useResources();

  const cleanStats = stats?.map((stat) => {
    const found = resources?.find(r => r?.resource === stat?.resource);
    return {
      ...found,
      probability: stat?.probability
    }
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles["modal"]}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h5">&#8213;&nbsp;Board Statistics&nbsp;&#8213;</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">Probability of Collecting Resource per Turn</Typography>
          </Grid>
          <Grid item pt={1}>
            <ResourceStats stats={cleanStats}/>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

StatsModal.displayName = 'StatsModal';