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
    const [aWidth, setAWidth] = useState((typeof window !== "undefined") ? window.innerWidth : null);
    const [aHeight, setAHeight] = useState((typeof window !== "undefined") ? window.innerHeight : null);
    const [scale, setScale] = useState(1);

    const updateAvailableWidth = () => {
        if (typeof screen !== "undefined") {
            const availableWidth = window.innerWidth;
            console.log(`AVAILABLE WIDTH: ${availableWidth}`);
            setAWidth(availableWidth);
            const availableHeight = window.innerHeight;
            console.log(`AVAILABLE HEIGHT: ${availableHeight}`);
            setAHeight(availableHeight)
        }
    }

    const updateScale = () => {
        const divWidth = gameBoardRef.current.clientWidth;
        console.log(`DIV WIDTH: ${divWidth}`);
        const divHeight = gameBoardRef.current.clientHeight;
        console.log(`DIV HEIGHT: ${divHeight}`);
        let nScale = Math.min(aWidth / divWidth, aHeight / divHeight);
        console.log(`aWidth: ${aWidth}`);
        console.log(`aHeight: ${aHeight}`);
        console.log(`aWidth / divWidth: ${aWidth / divWidth}`);
        console.log(`aHeight / divHeight: ${aHeight / divHeight}`);
        console.log(`SCALE: ${nScale}`);
        console.log(`aWidth < divWidth: ${(aWidth <= divWidth)}`);
        console.log(`divHeight < aHeight: ${(divHeight >= aHeight)}`);
        aWidth <= divWidth ? setScale(nScale) : setScale(1);
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