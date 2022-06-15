import { Badge, ButtonBase, Chip, Divider, Grid, Modal, Typography } from '@mui/material';
import styles from './scenarios.module.scss';
import { useState } from 'react';
import { useGameContext } from '../../contexts/game-context';
import { HarborModal } from './harbor-modal';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';

export const ScenarioDetail = ({ scenario }) => {

  const [open, setOpen] = useState(false);
  const { setScenario, setExpansion } = useGameContext();

  const handleButtonClick = () => {
    setOpen(true);
    setScenario(scenario);
    scenario?.expansionUrl ? setExpansion(scenario) : setExpansion(undefined);
  }

  return(
    <>
    <ButtonBase sx={{ height: '100%' }} onClick={handleButtonClick} disabled={scenario?.disabled}>
      <Grid container direction="column" className={styles["detail"]}>
        <Grid item position="relative">
          {/*{*/}
          {/*  scenario?.isExtension &&*/}
          {/*  <Grid container>*/}
          {/*    <Chip label="EXT" size="small" color="secondary" title="Extension Scenario" className={styles["detail__chip__left"]} />*/}
          {/*  </Grid>*/}
          {/*}*/}
          {
            scenario?.expansionUrl &&
            <Grid container justifyContent="flex-end">
              <Chip label="EXP" size="small" color="primary" title="Expansion Scenario" className={styles["detail__chip__right"]} />
            </Grid>
          }
          {/*{*/}
          {/*  <Grid container justifyContent="flex-end">*/}
          {/*    <Chip icon={<PersonIcon />} label={scenario?.players} size="small" color="primary" title="Players" className={styles["detail__chip__bright"]} />*/}
          {/*  </Grid>*/}
          {/*}*/}
          <Image src={`https:${scenario?.imageUrl}?w=462&h=275&fm=webp`} width={462} height={275} alt={scenario?.imageUrl} loading="lazy" className={styles["detail__image"]} />
        </Grid>
        <Grid item pt={1} px={1}>
          <Typography variant="h6" lineHeight="1">{scenario?.title}</Typography>
        </Grid>
        <Grid item pt={1}>
          <Divider variant="middle" />
        </Grid>
        <Grid item p={1}>
          <Typography variant="body2" lineHeight="1" color="secondary" fontFamily="Gill Sans !important">{scenario?.subtitle}</Typography>
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