import HelpIcon from '@mui/icons-material/Help';
import styles from './button-row.module.scss';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ProgressCards } from '../progress-cards/progress-cards';

export const ProgressCardsButton = () => {

  const [openProgressCards, setOpenProgressCards] = useState(false);

  return(
    <>
      <Button variant="contained" onClick={() => setOpenProgressCards(true)} size="small" endIcon={<HelpIcon />} className={styles["button-row__button"]}>
        Progress Cards
      </Button>
      <ProgressCards open={openProgressCards} onClose={() => setOpenProgressCards(false)} />
    </>
  );
}

ProgressCardsButton.displayName = 'ProgressCardsButton';