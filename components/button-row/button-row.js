import Grid from '@mui/material/Grid';

export const ButtonRow = () => {
    return (
        <Grid container direction="row" mt="30px">
            <Grid item sm={4} align="right">
                <input type="submit" value="Clear" />
            </Grid>
            <Grid item sm={4} align="center">
                <input type="submit" value="Generate" />
            </Grid>
            <Grid item sm={4} align="left">
                <input type="submit" value="Reset" />
            </Grid>
        </Grid>);
};

ButtonRow.displayName = 'ButtonRow';