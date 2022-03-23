import { HexRow } from '../hex-row/hex-row';

export const GameBoard = ({ props }) => {

    console.log(`Board Properties: ${JSON.stringify(props)}`);

    return(   
        <>
            {props.map((row, index) => {
                return (
                    <HexRow row={row.row} key={index}></HexRow>
                )
            })}
        </>
    );
}

GameBoard.displayName = 'GameBoard';