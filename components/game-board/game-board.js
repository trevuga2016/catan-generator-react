import { HexRow } from '../hex-row/hex-row';
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ButtonRow } from "../button-row/button-row";
import getBoardData from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';
import styles from './game-board.module.scss';
import Head from "next/head";
import { Header } from "../header/header";

export const GameBoard = ({ props }) => {

    const { numbers_freq, resources_freq, row_config, port_config, ports } = props;

    const [data, setData] = useState({
        boardData: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports)
    });

    const gameBoardRef = useRef();
    const [availableWidth, setAvailableWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? screen.width : 0);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const rowWidth = gameBoardRef.current.clientWidth;
        (availableWidth <= rowWidth) ? setScale(screenWidth / rowWidth) : setScale(1);
    }, []);

    return(
        <Grid container direction="column" className={styles["game-board"]} sx={{ transform: `scale(${scale})`, transformOrigin: "0 0" }}>
            <Head>
                <title>Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico"/>
            </Head>
            <Grid item>
                <Header />
            </Grid>
            <Grid item ref={gameBoardRef}>
                {data.boardData.map((row, index) => {
                    return (
                        <HexRow row={row.row} key={index} />
                    )
                })}
            </Grid>
            <ButtonRow clear={() => setData({ boardData: getDefaultData(row_config, port_config, ports) })}
                       generate={() => setData({ boardData: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports) })} />
        </Grid>
    );
}

GameBoard.displayName = 'GameBoard';