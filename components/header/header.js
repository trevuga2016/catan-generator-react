import { Grid } from '@mui/material';

export const Header = () => {
    return(
        <Grid container position="relative" justifyContent="center">
            <h1>Catan Board Generator</h1>
        </Grid>
    );
};

Header.displayName = 'Header';