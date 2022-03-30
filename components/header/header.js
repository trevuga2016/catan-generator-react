import { Grid } from "@mui/material";
import styles from './header.module.scss';

export const Header = ({ title }) => {
    return(
      <Grid container className={styles["header"]}>
          <Grid item>
              <h1>{title}</h1>
          </Grid>
      </Grid>

    );
};

Header.displayName = 'Header';