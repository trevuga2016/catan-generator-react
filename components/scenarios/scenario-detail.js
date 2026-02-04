import {Box, ButtonBase, Chip, Divider, Grid, Modal, Typography} from '@mui/material';
import styles from './scenarios.module.scss';
import {useState} from 'react';
import {useGameContext} from '../../contexts/game-context';
import {HarborModal} from './harbor-modal';
import PersonIcon from '@mui/icons-material/Person';

export const ScenarioDetail = ({ scenario }) => {

  const [open, setOpen] = useState(false);
  const { setScenario } = useGameContext();

  const handleButtonClick = () => {
    setOpen(true);
    setScenario(scenario);
  }

  return(
    <>
    <ButtonBase onClick={handleButtonClick} disabled={scenario?.disabled} className={styles["detail"]}>
      <Grid container direction="column" className={styles["detail__container"]}>
        <Grid>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Chip icon={<PersonIcon />} label={scenario?.players} size="small" color="primary" title="Players" className={styles["detail__chip"]} />
            <img src={scenario?.imageUrl} alt="scenario" className={styles["detail__image"]} />
          </Box>
        </Grid>
        <Grid p={1}>
          <Typography variant="h6" lineHeight="1">{scenario?.title}</Typography>
        </Grid>
        <Grid>
          <Divider variant="middle" />
        </Grid>
        <Grid p={1}>
          <Typography variant="body2" lineHeight="1" color="black" fontFamily="Gill Sans !important">{scenario?.subtitle}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
    <Modal open={open} onClose={() => setOpen(false)}>
      <div>
        <HarborModal />
      </div>
    </Modal>
    </>
  );
}

ScenarioDetail.displayName = 'ScenarioDetail';