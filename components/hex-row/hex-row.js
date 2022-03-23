import Grid from '@mui/material/Grid';
import { Hex } from '../../components/hex/hex';

export const HexRow = ({ row }) => {
    return (
        <Grid container direction="row" mb="-26px" justifyContent="center" wrap="nowrap">
            {row.map((hex, index) => {
                return (
                    <Grid item key={index}>
                        <Hex hex={hex}></Hex>
                    </Grid>
                );
            })}
        </Grid>);
};

HexRow.displayName = 'HexRow';