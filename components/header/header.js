import Grid from '@mui/material/Grid';

export const Header = () => {
    return(
        <Grid container justifyContent="center">
            <h1>Catan Board Generator</h1>
        </Grid>
    );
};

Header.displayName = 'Header';