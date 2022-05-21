import styles from './scenarios.module.scss';
import { Box, Button, Grid } from '@mui/material';
import { HarborSelect } from '../game-select/harbor-select';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useRouter } from 'next/router';
import { useGameContext } from '../game-select/game-context';

export const HarborModal = () => {

  const router = useRouter();
  const { scenario, harbors } = useGameContext();

  const handleSubmit = () => {
    const values = scenario.split(',');
    if (values.length > 1) {
      router.push(`/scenario/${values[0]}?ports=${harbors}&expansion=${values[1]}`);
    } else {
      router.push(`/scenario/${scenario}?ports=${harbors}`);
    }
  }

  return(
    <Box className={styles["harbor-modal"]}>
      <Grid container direction="column">
        <Grid item>
          <HarborSelect isScenarioSelect="true" />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSubmit} size="small" endIcon={<AutorenewIcon />} className={styles["harbor-modal__button"]}>
            Generate
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

HarborModal.displayName = 'HarborModal';