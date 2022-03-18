import { Grid, Typography } from '@mui/material';

export const Footer = () => {
    return(
        <Grid container justifyContent="right">
            <Typography variant="body2" color="black">
                2022 &copy; Trevor Richardson
            </Typography>
        </Grid>
    )
}

Footer.displayName = 'Footer';

