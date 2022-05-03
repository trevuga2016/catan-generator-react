import { Box, Divider, Grid, Typography } from '@mui/material';
import styles from './scenarios.module.scss';
import { makeStyles } from '@mui/styles';

export const ScenarioDetail = ({ title, subtitle }) => {

  const useStyles = makeStyles(() => ({
    divider: {
      background: '#000',
    },
  }));

  const classes = useStyles();

  return(
    <Box className={styles["detail"]}>
      <Grid container direction="column">
        <Grid item>
          <img className={styles["detail__image"]} src="https://tomkingskennel.com/wp-content/uploads/2020/04/cream2.jpg" alt="altText" />
        </Grid>
        <Grid item pt={1} borderBottom="">
          <Typography variant="h6" lineHeight="1">{title}</Typography>
        </Grid>
        <Grid item pt={1}>
          <Divider classes={{root: classes.divider}} variant="middle" />
        </Grid>
        <Grid item p={1}>
          <Typography variant="body2" lineHeight="1" textAlign="left" color="secondary">{subtitle}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

ScenarioDetail.displayName = 'ScenarioDetail';