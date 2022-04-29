import { Button } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import styles from './button-row.module.scss';
import { StatsModal } from '../stats-modal/stats-modal';
import { useState } from "react";

export const StatsButton = ({ stats }) => {

  const [openStats, setOpenStats] = useState(false);

  const handleOpenStats = () => setOpenStats(true);
  const handleCloseStats = () => setOpenStats(false);

  return(
    <>
      <Button variant="contained" onClick={handleOpenStats} size="small" endIcon={<LeaderboardIcon />} className={styles["button-row__button"]}>
        Statistics
      </Button>
      <StatsModal open={openStats} onClose={handleCloseStats} stats={stats} />
    </>
  );
}