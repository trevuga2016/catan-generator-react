import { Grid, Typography } from '@mui/material';

export const Footer = () => {
    return(
        <Grid container direction="column" sx={{ display: "flex", bottom: "0", position: "absolute" }}>
            <Typography variant="body2" textAlign="right" color="black">
                2022 &copy; Trevor Richardson
            </Typography>
        </Grid>
    )
}

Footer.displayName = 'Footer';

