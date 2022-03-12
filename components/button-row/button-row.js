import { Grid, Typography } from '@mui/material';

export const ButtonRow = ({ clear, generate }) => {
    return (
        <Grid container direction="row" mt="30px">
            <Grid item sm={4} align="right">
                <button type="button" onClick={clear}>Clear</button>
            </Grid>
            <Grid item sm={4} align="center">
                <button type="button" onClick={generate}>Generate</button>
            </Grid>
            <Grid item sm={4} align="left">
                <button type="submit">Reset</button>
            </Grid>
            <Grid container direction="column">
                <Typography variant="body2" textAlign="right" color="black">
                    2022 &copy; Trevor Richardson
                </Typography>
            </Grid>
        </Grid>
    );
};

ButtonRow.displayName = 'ButtonRow';