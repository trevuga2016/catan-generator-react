import { Box, Grid, Modal, Typography } from '@mui/material';
import styles from './building-costs.module.scss';
import { useGameContext } from '../../contexts/game-context';
import { BuildingCostsItem } from './building-costs-item';

export const BuildingCosts = ({open, onClose}) => {

  const {scenario} = useGameContext();

  return (
    <Modal open={open} onClose={onClose}>
      <Box className={styles["modal"]}>
        <Grid container direction="column" className={styles["modal__container"]}>
          <Grid item>
            <Typography variant="h5" p={1}>&#8213;&nbsp;Building Costs&nbsp;&#8213;</Typography>
          </Grid>
          <Grid container direction="row" className={styles["modal__container__wrapper"]}>
            {
              scenario?.buildingCosts?.map((cost, i) => {
                return (
                  <BuildingCostsItem buildingCost={cost} key={i}/>
                );
              })
            }
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

BuildingCosts.displayName = 'BuildingCosts';