import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { Footer } from '../footer/footer';

export const ButtonRow = ({ clear, generate }) => {

    const router = useRouter();

    return (
        <Grid container direction="row" mt="30px">
            <Grid item sm={4} align="right">
                <button type="button" onClick={clear}>Clear</button>
            </Grid>
            <Grid item sm={4} align="center">
                <button type="button" onClick={generate}>Generate</button>
            </Grid>
            <Grid item sm={4} align="left">
                <button type="button" onClick={() => router.push('/')}>Home</button>
            </Grid>
            <Footer></Footer>
        </Grid>
    );
};

ButtonRow.displayName = 'ButtonRow';