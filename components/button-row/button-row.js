import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './button-row.module.scss';
import { useState } from 'react';
import { StatsModal } from '../stats-modal/stats-modal';
import { BuildingCosts } from '../building-costs/building-costs';

export const ButtonRow = ({ generate, stats }) => {

    const router = useRouter();
    const [openStats, setOpenStats] = useState(false);
    const [openCosts, setOpenCosts] = useState(false);
    const handleOpenStats = () => setOpenStats(true);
    const handleCloseStats = () => setOpenStats(false);
    const handleOpenCosts = () => setOpenCosts(true);
    const handleCloseCosts = () => setOpenCosts(false);

    return (
        <Grid container direction="row" className={styles["button-row"]}>
            <Grid item xs={3}>
                <button type="button" onClick={handleOpenCosts}>Building Costs</button>
                <BuildingCosts open={openCosts} onClose={handleCloseCosts} />
            </Grid>
            <Grid item xs={3}>
                <button type="button" onClick={generate}>Generate</button>
            </Grid>
            <Grid item xs={3}>
                <button type="button" onClick={() => router.push('/')}>Home</button>
            </Grid>
            <Grid item xs={3}>
                <button type="button" onClick={handleOpenStats}>Statistics</button>
                <StatsModal open={openStats} onClose={handleCloseStats} stats={stats} />
            </Grid>
        </Grid>
    );
};

ButtonRow.displayName = 'ButtonRow';