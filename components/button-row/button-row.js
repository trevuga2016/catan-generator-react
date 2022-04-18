import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './button-row.module.scss';
import { useState } from 'react';
import { StatsModal } from '../stats-modal/stats-modal';

export const ButtonRow = ({ clear, generate, stats }) => {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container direction="row" className={styles["button-row"]}>
            <Grid item xs={3}>
                <button type="button" onClick={clear} disabled>Clear</button>
            </Grid>
            <Grid item xs={3}>
                <button type="button" onClick={generate}>Generate</button>
            </Grid>
            <Grid item xs={3}>
                <button type="button" onClick={() => router.push('/')}>Home</button>
            </Grid>
            <Grid item xs={3}>
                <button type="button" onClick={handleOpen}>Statistics</button>
                <StatsModal open={open} onClose={handleClose} stats={stats} />
            </Grid>
        </Grid>
    );
};

ButtonRow.displayName = 'ButtonRow';