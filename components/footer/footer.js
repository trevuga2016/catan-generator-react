import { Grid, Typography } from '@mui/material';

export const Footer = ({ position }) => {
    return(
        <Grid container direction="column" sx={{ bottom: "0", position: position }}>
            <Typography variant="body2" textAlign="right" color="black">
                2022 &copy; Trevor Richardson
            </Typography>
        </Grid>
    )
}

Footer.displayName = 'Footer';

