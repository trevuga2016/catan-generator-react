import { Avatar, Grid, ListItemAvatar, Typography } from '@mui/material';
import styles from './building-costs.module.scss';

export const BuildingCostsItem = ({ buildingCost }) => {
  return(
    <Grid item className={styles["modal__container__item"]}>
      <Grid container direction="column" className={styles["modal__container__item__container"]}>
        <Typography variant="body1" sx={{paddingBottom: '4px'}}>{buildingCost?.fields?.buildType}</Typography>
        <Grid container direction="row" wrap="nowrap" align="center" className={styles["modal__container__item__resources"]}>
          {
            buildingCost?.fields?.resources?.map((resource, i) => {
              return (
                <div key={i}>
                  <ListItemAvatar>
                    <Avatar src={resource?.fields?.icon?.fields?.file?.url}/>
                  </ListItemAvatar>
                </div>
              );
            })
          }
        </Grid>
        <Typography variant="body2" sx={{paddingTop: '4px'}}>{buildingCost?.fields?.victoryPoints === '1' ? `${buildingCost?.fields?.victoryPoints} Point` : `${buildingCost?.fields?.victoryPoints} Points`}</Typography>
      </Grid>
    </Grid>
  );
}

BuildingCostsItem.displayName = "BuildingCostsItem";