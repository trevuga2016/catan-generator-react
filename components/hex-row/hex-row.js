import Grid from '@mui/material/Grid';
import { Hex } from '../hex/hex';
import styles from './hex-row.module.scss';

export const HexRow = ({ row }) => {
    return (
        <Grid container className={styles["hex-row"]} direction="row" wrap="nowrap">
            {row.map((hex, index) => {
                return (
                    <Grid item key={index}>
                        <Hex hex={hex} />
                    </Grid>
                );
            })}
        </Grid>);
};

HexRow.displayName = 'HexRow';