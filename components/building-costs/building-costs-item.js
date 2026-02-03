import { Avatar, Grid, ListItemAvatar, Typography } from '@mui/material';
import styles from './building-costs.module.scss';
import {useContentContext} from "../../contexts/content-context";

export const BuildingCostsItem = ({ buildingCost }) => {
    const { resources } = useContentContext();

  return(
    <Grid item className={styles["modal__container__item"]}>
      <Grid container direction="column" className={styles["modal__container__item__container"]}>
        <Typography variant="body1" sx={{paddingBottom: '4px'}}>{buildingCost?.buildType}</Typography>
        <Grid container direction="row" wrap="nowrap" align="center" className={styles["modal__container__item__resources"]}>
          {
            buildingCost?.resources?.map((resource, i) => {
                let rInfo = resources.find(r => r.resource === resource);
              return (
                <div key={i}>
                  <ListItemAvatar>
                    <Avatar src={rInfo?.icon} title={resource} />
                  </ListItemAvatar>
                </div>
              );
            })
          }
        </Grid>
        <Typography variant="body2" sx={{paddingTop: '4px'}}>{buildingCost?.victoryPoints === '1' ? `${buildingCost?.victoryPoints} Point` : `${buildingCost?.victoryPoints} Points`}</Typography>
      </Grid>
    </Grid>
  );
}

BuildingCostsItem.displayName = "BuildingCostsItem";