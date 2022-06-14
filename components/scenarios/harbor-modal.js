import styles from './scenarios.module.scss';
import { Box, Button, Grid } from '@mui/material';
import { HarborSelect } from '../harbor-select/harbor-select';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useRouter } from 'next/router';
import { useGameContext } from '../../contexts/game-context';

export const HarborModal = () => {

  const router = useRouter();
  const { scenario, harbors, expansion } = useGameContext();

  const handleSubmit = () => {
    const route = expansion ? `/scenario/${scenario?.scenarioUrl}?ports=${harbors}&expansion=${expansion?.expansionUrl}` : `/scenario/${scenario?.scenarioUrl}?ports=${harbors}`;
    router.push(route);
  }

  return(
    <Box className={styles["harbor-modal"]}>
      <Grid container direction="column">
        <Grid item>
          <HarborSelect />
        </Grid>
        <Grid item pt={1}>
          <Button variant="contained" onClick={handleSubmit} size="small" endIcon={<AutorenewIcon />} className={styles["harbor-modal__button"]}>
            Generate
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

HarborModal.displayName = 'HarborModal';