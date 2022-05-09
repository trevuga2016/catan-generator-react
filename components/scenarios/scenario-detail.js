import { ButtonBase, Divider, Grid, Modal, Skeleton, Typography } from '@mui/material';
import styles from './scenarios.module.scss';
import { useEffect, useState } from 'react';
import { useGameContext } from '../game-select/game-context';
import { HarborModal } from './harbor-modal';

export const ScenarioDetail = ({ description, isLoading }) => {

  const { title, subtitle, imageUrl, pageUrl } = description;
  const [open, setOpen] = useState(false);
  const { setScenario, setHarbors } = useGameContext();

  const handleButtonClick = () => {
    setOpen(true);
    setScenario(pageUrl);
  }

  useEffect(() => {
    setScenario('');
    setHarbors('hide');
  }, []);

  return(
    <>
    <ButtonBase sx={{ height: '100%' }} onClick={handleButtonClick} disabled={isLoading}>
      <Grid container direction="column" className={styles["detail"]}>
        <Grid item>
          { isLoading ? <Skeleton animation="wave" height={100} width="100%" /> : <img className={styles["detail__image"]} src={imageUrl} alt={imageUrl}/> }
        </Grid>
        <Grid item pt={1}>
          <Typography variant="h6" lineHeight="1">{ isLoading ? <Skeleton animation="wave" /> : title }</Typography>
        </Grid>
        <Grid item pt={1}>
          <Divider variant="middle" />
        </Grid>
        <Grid item p={1}>
          <Typography variant="body2" lineHeight="1" textAlign="left" color="secondary">{ isLoading ? <Skeleton animation="wave" /> : subtitle }</Typography>
        </Grid>
        {/*<Grid item>*/}
        {/*  <PersonIcon sx={{ verticalAlign: 'middle', fontSize: '0.75rem' }}/><Typography variant="caption">&nbsp;{players} players</Typography>*/}
        {/*</Grid>*/}
      </Grid>
    </ButtonBase>
    <Modal open={open} onClose={() => setOpen(false)}>
      <HarborModal />
    </Modal>
    </>
  );
}

ScenarioDetail.displayName = 'ScenarioDetail';