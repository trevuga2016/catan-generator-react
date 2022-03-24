import { HexRow } from '../hex-row/hex-row';
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ButtonRow } from "../button-row/button-row";
import getBoardData from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';

export const GameBoard = ({ props }) => {

    const { numbers_freq, resources_freq, row_config, port_config, ports } = props;

    const [data, setData] = useState({
        boardData: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports)
    });

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
        <Grid container position="relative" height="fit-content" width="fit-content" ref={gameBoardRef} sx={{ transform: `scale(${scale})`, transformOrigin: "0 0" }}>
            {data.boardData.map((row, index) => {
                return (
                    <HexRow row={row.row} key={index} />
                )
            })}
            <ButtonRow clear={() => setData({ boardData: getDefaultData(row_config, port_config, ports) })}
                       generate={() => setData({ boardData: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports) })} />
        </Grid>
    );
}

GameBoard.displayName = 'GameBoard';