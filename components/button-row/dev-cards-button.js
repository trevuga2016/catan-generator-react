import HelpIcon from '@mui/icons-material/Help';
import styles from './button-row.module.scss';
import { Button } from '@mui/material';
import { useState } from 'react';
import { DevCards } from '../dev-cards/dev-cards';

export const DevCardsButton = () => {

  const [openDevCards, setOpenDevCards] = useState(false);

  return(
    <>
      <Button variant="contained" onClick={() => setOpenDevCards(true)} size="small" endIcon={<HelpIcon />} className={styles["button-row__button"]}>
        Dev Cards
      </Button>
      <DevCards open={openDevCards} onClose={() => setOpenDevCards(false)} />
    </>
  );
}

DevCardsButton.displayName = 'DevCardsButton';