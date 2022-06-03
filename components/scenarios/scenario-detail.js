import { ButtonBase, Chip, Divider, Grid, Modal, Typography } from '@mui/material';
import styles from './scenarios.module.scss';
import { useEffect, useState } from 'react';
import { useGameContext } from '../game-select/game-context';
import { HarborModal } from './harbor-modal';
import Image from 'next/image';

export const ScenarioDetail = ({ scenario }) => {

  const { title, subtitle, imageUrl, pageUrl, disabled } = scenario;
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
    <ButtonBase sx={{ height: '100%' }} onClick={handleButtonClick} disabled={disabled}>
      <Grid container direction="column" className={styles["detail"]}>
        <Grid item>
          {
            scenario?.hasOwnProperty('expansionName') &&
            <Grid container justifyContent="flex-end">
              <Chip label="EXP" size="small" color="primary" title="Expansion Scenario" className={styles["detail__chip"]} />
            </Grid>
          }
          <Image src={`https:${imageUrl}?w=2600&h=1500&fm=webp`} width={2600} height={1500} alt={imageUrl} loading="lazy" className={styles["detail__image"]} />
        </Grid>
        <Grid item pt={1} px={1}>
          <Typography variant="h6" lineHeight="1">{title}</Typography>
        </Grid>
        <Grid item pt={1}>
          <Divider variant="middle" />
        </Grid>
        <Grid item p={1}>
          <Typography variant="body2" lineHeight="1" textAlign="justify" color="secondary" fontFamily="Gill Sans !important">{subtitle}</Typography>
        </Grid>
        {/*<Grid item>*/}
        {/*  <PersonIcon sx={{ verticalAlign: 'middle', fontSize: '0.75rem' }}/><Typography variant="caption">&nbsp;{players} players</Typography>*/}
        {/*</Grid>*/}
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