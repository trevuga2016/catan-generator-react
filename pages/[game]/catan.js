import Grid from '@mui/material/Grid';
import { HexRow } from '../../components/hex-row/hex-row';

export const Catan = ({ props }) => {

    console.log(`Board Properties: ${JSON.stringify(props)}`);

    return(
        <Grid container justifyContent="center">
            {props.map((row, index) => {
                return (
                    <HexRow row={row.row} key={index}></HexRow>
                )
            })}
        </Grid>
    );
};

export default Catan;