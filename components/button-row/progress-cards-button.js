import HelpIcon from '@mui/icons-material/Help';
import styles from './button-row.module.scss';
import { Button } from '@mui/material';

export const ProgressCardsButton = () => {
  return(
    <Button variant="contained" disabled size="small" endIcon={<HelpIcon />} className={styles["button-row__button"]}>
      Progress Cards
    </Button>
  );
}

ProgressCardsButton.displayName = 'ProgressCardsButton';