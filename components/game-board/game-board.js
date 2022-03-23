import { Grid } from '@mui/material';
import { HexRow } from '../hex-row/hex-row';
import { useState, useRef, useEffect } from 'react';

export const GameBoard = ({ props }) => {

    console.log(`Board Properties: ${JSON.stringify(props)}`);

    const gameBoardRef = useRef();
    const [aWidth, setAWidth] = useState(null);
    const [aHeight, setAHeight] = useState(null);
    const [scale, setScale] = useState(1);

    const updateAvailableWidth = () => {
        if (typeof window !== "undefined") {
            const availableWidth = window.innerWidth;
            setAWidth(availableWidth);
            const availableHeight = window.innerHeight;
            setAHeight(availableHeight)
        }
    }

    const updateScale = () => {
        const divWidth = gameBoardRef.current.clientWidth;
        const divHeight = gameBoardRef.current.clientHeight;
        let nScale = Math.min(aWidth / divWidth, aHeight / divHeight);
        aWidth <= divWidth ? setScale(nScale) : setScale(1);
    }

    useEffect(() => {
        window.addEventListener("resize", updateAvailableWidth);
    }, []);

    useEffect(() => {
        if (aWidth == null && aHeight == null) {
            updateAvailableWidth();
        }
        updateScale();
    }, [aWidth, aHeight]);

    return(
        <Grid container width="fit-content" ref={gameBoardRef} sx={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>    
        {props.map((row, index) => {
            return (
                <HexRow row={row.row} key={index}></HexRow>
            )
        })}
        </Grid>
    );
}

GameBoard.displayName = 'GameBoard';