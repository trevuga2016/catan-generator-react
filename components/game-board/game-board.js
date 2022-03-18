import { Grid } from '@mui/material';
import { HexRow } from '../hex-row/hex-row';

export const GameBoard = ({ props }) => {
    console.log(`Board Properties: ${JSON.stringify(props)}`);
    return(
        <Grid container width="fit-content" mb="35px">
            {props.map((row, index) => {
                return (
                    <HexRow row={row.row} key={index}></HexRow>
                )
            })}
        </Grid>
    );
}

GameBoard.displayName = 'GameBoard';