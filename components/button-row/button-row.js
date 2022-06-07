import { Grid } from '@mui/material';
import styles from './button-row.module.scss';
import { GenerateButton } from './generate-button';
import { HomeButton } from './home-button';
import { CostsButton } from './costs-button';
import { StatsButton } from './stats-button';
import { ProgressCardsButton } from './progress-cards-button';
import { DevCardsButton } from './dev-cards-button';
import { useExpansionContext } from '../../contexts/expansion-context';

export const ButtonRow = ({ generate, stats }) => {

    const { expansion } = useExpansionContext();

    return (
      <Grid container className={styles["button-row"]}>
        <Grid item xs={6} md={3} className={styles["button-row__item"]}>
            <HomeButton />
        </Grid>
        <Grid item xs={6} md={3} className={styles["button-row__item"]}>
            <GenerateButton generate={generate} />
        </Grid>
        <Grid item xs={6} md={3} className={styles["button-row__item"]}>
            <CostsButton />
        </Grid>
        <Grid item xs={6} md={3} className={styles["button-row__item"]}>
            <StatsButton stats={stats} />
        </Grid>
        <Grid item xs={6} md={3} className={styles["button-row__item"]}>
          {
            expansion?.includes('ck') ? <ProgressCardsButton /> : <DevCardsButton />
          }
        </Grid>
      </Grid>
    );
};

ButtonRow.displayName = 'ButtonRow';