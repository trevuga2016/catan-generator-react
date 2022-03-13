import { Grid } from '@mui/material';
import { HexRow } from '../hex-row/hex-row';

export const GameBoard = ({ props }) => {
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
}

GameBoard.displayName = 'GameBoard';