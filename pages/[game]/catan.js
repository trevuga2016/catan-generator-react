import Grid from '@mui/material/Grid';
import { HexRow } from '../../components/hex-row/hex-row';
import { ButtonRow } from '../../components/button-row/button-row';

export const Catan = ({ props }) => {

    console.log(`Board Properties: ${JSON.stringify(props)}`);

    return(
        <Grid container justifyContent="center" sx={{ border: "1px solid white" }}>
            {props.map((row, index) => {
                return (
                    <HexRow row={row.row} key={index}></HexRow>
                )
            })}
            <ButtonRow></ButtonRow>
        </Grid>
    );
};

export default Catan;