import { AppBar, Grid, Typography } from '@mui/material';

export const Footer = () => {
    return(
      <AppBar id="footer" position="absolute" sx={{ top: "auto", bottom: 0, background: "transparent"}}>
        <Grid container justifyContent="right">
          <Grid item>
            <Typography variant="body2" color="black">
              2022 &copy; Trevor Richardson
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    );
}

Footer.displayName = 'Footer';

