import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

export const ButtonRow = () => {

    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    }

    return (
        <Grid container direction="row" mt="30px">
            <Grid item sm={4} align="right">
                <button type="submit">Clear</button>
            </Grid>
            <Grid item sm={4} align="center">
                <button type="submit" onClick={refreshData}>Generate</button>
            </Grid>
            <Grid item sm={4} align="left">
                <button type="submit">Reset</button>
            </Grid>
        </Grid>);
};

ButtonRow.displayName = 'ButtonRow';