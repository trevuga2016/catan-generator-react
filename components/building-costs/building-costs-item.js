import { Avatar, Grid, ListItemAvatar, Typography } from '@mui/material';

export const BuildingCostsItem = ({ buildingCost }) => {
  return(
    <Grid item p={1} m={0.5} border="1px solid #83B5DA">
      <Grid container direction="column" alignItems="center">
        <Typography variant="body1">{buildingCost?.fields?.buildType}</Typography>
        <Grid container direction="row" wrap="nowrap" width="fit-content" align="center">
          {
            buildingCost?.fields?.resources?.map((resource) => {
              return (
                <ListItemAvatar>
                  <Avatar src={resource?.fields?.icon?.fields?.file?.url}/>
                </ListItemAvatar>
              );
            })
          }
        </Grid>
        <Typography variant="body1">{buildingCost?.fields?.victoryPoints === '1' ? `${buildingCost?.fields?.victoryPoints} Point` : `${buildingCost?.fields?.victoryPoints} Points`}</Typography>
      </Grid>
    </Grid>
  );
}

BuildingCostsItem.displayName = "BuildingCostsItem";