import { HexRow } from '../hex-row/hex-row';
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ButtonRow } from "../button-row/button-row";
import getBoardData from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';
import styles from './game-board.module.scss';

export const GameBoard = ({ props }) => {

    const { numbers_freq, resources_freq, row_config, port_config, ports } = props;

    const [data, setData] = useState({
        boardData: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports)
    });

    const gameBoardRef = useRef();
    const [aWidth, setAWidth] = useState((typeof screen !== "undefined") ? screen.width : null);
    const [aHeight, setAHeight] = useState((typeof screen !== "undefined") ? screen.height : null);
    const [scale, setScale] = useState(1);

    const updateAvailableWidth = () => {
        if (typeof screen !== "undefined") {
            const availableWidth = screen.width;
            setAWidth(availableWidth);
            const availableHeight = screen.height;
            setAHeight(availableHeight)
        }
    }

    const updateScale = () => {
        const divWidth = gameBoardRef.current.clientWidth;
        const divHeight = gameBoardRef.current.clientHeight;
        let nScale = Math.min(aWidth / divWidth, aHeight / divHeight);
        ((aWidth <= divWidth) || (divHeight >= aHeight)) ? setScale(nScale) : setScale(1);
    }

    useEffect(() => {
        updateAvailableWidth();
        updateScale();
    }, []);

    return(
        <Grid container className={styles["game-board"]} ref={gameBoardRef} sx={{ transform: `scale(${scale})`, transformOrigin: "0 0" }}>
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