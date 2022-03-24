import { Grid } from "@mui/material";

export const Header = () => {
    return(
      <Grid container position="relative" height="fit-content" justifyContent="center">
          <Grid item>
              <h1>Catan Board Generator</h1>
          </Grid>
      </Grid>

    );
};

Header.displayName = 'Header';