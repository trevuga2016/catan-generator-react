import { Grid } from "@mui/material";
import styles from './header.module.scss';

export const Header = () => {
    return(
      <Grid container className={styles["header"]}>
          <Grid item>
              <h1>Catan Board Generator</h1>
          </Grid>
      </Grid>

    );
};

Header.displayName = 'Header';