import HelpIcon from '@mui/icons-material/Help';
import styles from './button-row.module.scss';
import { Button } from '@mui/material';

export const DevCardsButton = () => {
  return(
    <Button variant="contained" size="small" endIcon={<HelpIcon />} className={styles["button-row__button"]}>
      Dev Cards
    </Button>
  );
}

DevCardsButton.displayName = 'DevCardsButton';