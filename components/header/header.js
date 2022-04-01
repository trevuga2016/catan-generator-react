import { Grid } from "@mui/material";
import styles from './header.module.scss';
import { useRouter } from "next/router";

export const Header = ({ title }) => {

    const router = useRouter();

    const goHome = () => {
        router.push('/');
    };

    return(
      <Grid container className={styles["header"]}>
          <Grid item onClick={goHome} className={styles["header__title"]}>
              <h1>{title}</h1>
          </Grid>
      </Grid>

    );
};

Header.displayName = 'Header';