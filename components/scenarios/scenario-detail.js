import { Box, Button, ButtonBase, Divider, Grid, Modal, Typography } from '@mui/material';
import styles from './scenarios.module.scss';
import { useEffect, useState } from 'react';
import { HarborSelect } from '../game-select/harbor-select';
import { useRouter } from 'next/router';
import { useGameContext } from '../game-select/game-context';
import AutorenewIcon from '@mui/icons-material/Autorenew';

export const ScenarioDetail = ({ description }) => {

  const { title, subtitle, imageUrl } = description;
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { scenario, setScenario, harbors, setHarbors } = useGameContext();

  const handleButtonClick = () => {
    setOpen(true);
    'The Settlers of Catan' === title ? setScenario('catan') : setScenario('catan5_6ext');
  }

  const handleSubmit = () => {
    router.push(`/scenario/${scenario}?ports=${harbors}`);
  }

  useEffect(() => {
    setScenario('');
    setHarbors('hide');
  }, []);

  return(
    <>
    <ButtonBase sx={{ height: '100%' }} onClick={handleButtonClick}>
      <Grid container direction="column" className={styles["detail"]}>
        <Grid item>
          <img className={styles["detail__image"]} src="https://tomkingskennel.com/wp-content/uploads/2020/04/cream2.jpg" alt="altText" />
        </Grid>
        <Grid item pt={1}>
          <Typography variant="h6" lineHeight="1">{title}</Typography>
        </Grid>
        <Grid item pt={1}>
          <Divider variant="middle" />
        </Grid>
        <Grid item p={1}>
          <Typography variant="body2" lineHeight="1" textAlign="left" color="secondary">{subtitle}</Typography>
        </Grid>
        {/*<Grid item>*/}
        {/*  <PersonIcon sx={{ verticalAlign: 'middle', fontSize: '0.75rem' }}/><Typography variant="caption">&nbsp;{players} players</Typography>*/}
        {/*</Grid>*/}
      </Grid>
    </ButtonBase>
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box className={styles["harbor-modal"]}>
        <Grid container direction="column">
          <Grid item>
            <HarborSelect />
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleSubmit} size="small" endIcon={<AutorenewIcon />} className={styles["harbor-modal__button"]}>
              Generate
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
    </>
  );
}

ScenarioDetail.displayName = 'ScenarioDetail';