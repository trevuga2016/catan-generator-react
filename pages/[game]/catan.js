import Grid from '@mui/material/Grid';
import { HexRow } from '../../components/hex-row/hex-row';
import { ButtonRow } from '../../components/button-row/button-row'

export const Catan = ({ scenario }) => {
    let hexArray = [];
    switch (scenario) {
        case "catan":
            hexArray = [3, 4, 5, 4, 3]
            break;
        case "catan5&6":
            hexArray = [3, 4, 5, 6, 5, 4, 3]
            break;
        default:
            hexArray = [3, 4, 5, 4, 3]
    };

    return(
        <Grid container justifyContent="center" sx={{ border: "1px solid white" }}>
            {hexArray.map((i, index) => {
                return(
                    <HexRow noOfHexes={i} key={index}></HexRow>
                )
            })}
            <ButtonRow></ButtonRow>
        </Grid>
    );
};

export default Catan;