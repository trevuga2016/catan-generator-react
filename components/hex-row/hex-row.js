import Grid from '@mui/material/Grid';
import { Hex } from '../../components/hex/hex';

export const HexRow = ({ noOfHexes }) => {
    if (!noOfHexes || noOfHexes <= 0) {
        console.error("Please enter a number of hexes that is greater than zero")
    };
    return (
        <Grid container direction="row" justifyContent="center" mb="-26px">
            {Array.from(Array(noOfHexes), (v, i) => {
                return (
                    <Grid item key={i}>
                        <Hex></Hex>
                    </Grid>
                );
            })}
        </Grid>);
};

HexRow.displayName = 'HexRow';