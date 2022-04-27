import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './button-row.module.scss';
import { useState } from 'react';
import { StatsModal } from '../stats-modal/stats-modal';
import { BuildingCosts } from '../building-costs/building-costs';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export const ButtonRow = ({ generate, stats, top }) => {

    const router = useRouter();
    const [openStats, setOpenStats] = useState(false);
    const [openCosts, setOpenCosts] = useState(false);
    const handleOpenStats = () => setOpenStats(true);
    const handleCloseStats = () => setOpenStats(false);
    const handleOpenCosts = () => setOpenCosts(true);
    const handleCloseCosts = () => setOpenCosts(false);

    return (
        <Grid container className={styles["button-row"]} top={top}>
            <Grid item xs={6} md={3} className={styles["button-row__item"]}>
              <Button variant="contained" onClick={() => router.push('/')} size="small" endIcon={<HomeIcon />} className={styles["button-row__button"]}>
                Home
              </Button>
            </Grid>
            <Grid item xs={6} md={3} className={styles["button-row__item"]}>
                <Button variant="contained" onClick={generate} size="small" endIcon={<AutorenewIcon />} className={styles["button-row__button"]}>
                  Generate
                </Button>
            </Grid>
            <Grid item xs={6} md={3} className={styles["button-row__item"]}>
              <Button variant="contained" onClick={handleOpenCosts} size="small" endIcon={<ConstructionIcon />} className={styles["button-row__button"]}>
                Building Costs
              </Button>
              <BuildingCosts open={openCosts} onClose={handleCloseCosts} />
            </Grid>
            <Grid item xs={6} md={3} className={styles["button-row__item"]}>
                <Button variant="contained" onClick={handleOpenStats} size="small" endIcon={<LeaderboardIcon />} className={styles["button-row__button"]}>
                  Statistics
                </Button>
                <StatsModal open={openStats} onClose={handleCloseStats} stats={stats} />
            </Grid>
        </Grid>
    );
};

ButtonRow.displayName = 'ButtonRow';