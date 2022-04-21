import { HexRow } from '../hex-row/hex-row';
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ButtonRow } from "../button-row/button-row";
import { useCatanLogic } from '../../hooks/useCatanLogic';
import styles from './game-board.module.scss';
import Head from "next/head";
import { Header } from "../header/header";
import { useRouter } from "next/router";

export const GameBoard = ({ props }) => {

    const { numbers_freq, resources_freq, row_config, port_config, title } = props;

    const router = useRouter();

    let ports = router.query['ports'];
    if (ports) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('ports', ports);
        }
    } else {
        if (typeof window !== 'undefined') {
            ports = localStorage.getItem('ports');
        }
    }

    const { boardData, stats, generateBoardData } = useCatanLogic(numbers_freq, resources_freq, row_config, port_config, ports);

    const gameBoardRef = useRef();
    const heightRef = useRef();

    const [availableWidth, setAvailableWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [availableHeight, setAvailableHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0);
    const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? screen.width : 0);
    const [scale, setScale] = useState(1);
    const [transformOrigin, setTransformOrigin] = useState(null);

    useEffect(() => {
        const rowWidth = gameBoardRef.current.clientWidth;
        const boardHeight = heightRef.current.clientHeight;
        if (availableWidth <= rowWidth) {
            setScale(screenWidth / rowWidth);
            setTransformOrigin('top left');
        } else if (boardHeight > availableHeight) {
            setScale(availableHeight / boardHeight);
            setTransformOrigin('top center');
        } else {
            setScale(1);
        }
    }, [boardData]);

    return(
        <Grid container direction="column" ref={heightRef} className={styles["game-board"]} sx={{ transform: `scale(${scale})`, transformOrigin: `${transformOrigin}` }}>
            <Head>
                <title>{title} | Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico"/>
            </Head>
            <Grid item>
                <Header title={title} />
            </Grid>
            <Grid item ref={gameBoardRef}>
                {boardData?.map((row, index) => {
                    return (
                        <HexRow row={row.row} key={index} />
                    )
                })}
                <ButtonRow generate={() => generateBoardData()} stats={stats} />
            </Grid>
        </Grid>
    );
}

GameBoard.displayName = 'GameBoard';