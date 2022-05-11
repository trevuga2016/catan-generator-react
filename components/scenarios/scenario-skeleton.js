import styles from "./scenarios.module.scss";
import { Divider, Grid, Skeleton } from "@mui/material";

export const ScenarioSkeleton = () => {
  return(
    <Grid container direction="column" className={styles["detail"]}>
      <Grid item>
        <Skeleton animation="wave" height={150} />
      </Grid>
      <Grid item pt={1}>
        <Skeleton animation="wave" />
      </Grid>
      <Grid item pt={1}>
        <Divider variant="middle" />
      </Grid>
      <Grid item p={1}>
        <Skeleton animation="wave" />
      </Grid>
    </Grid>
  );
}

ScenarioSkeleton.displayName = 'ScenarioSkeleton';