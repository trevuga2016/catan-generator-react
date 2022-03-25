import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './button-row.module.scss';

export const ButtonRow = ({ clear, generate }) => {

    const router = useRouter();

    return (
        <Grid container direction="row" className={styles["button-row"]}>
            <Grid item xs={4} align="right">
                <button type="button" onClick={clear}>Clear</button>
            </Grid>
            <Grid item xs={4} align="center">
                <button type="button" onClick={generate}>Generate</button>
            </Grid>
            <Grid item xs={4} align="left">
                <button type="button" onClick={() => router.push('/')}>Home</button>
            </Grid>
        </Grid>
    );
};

ButtonRow.displayName = 'ButtonRow';