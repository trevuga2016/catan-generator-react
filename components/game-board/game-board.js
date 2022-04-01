import { HexRow } from '../hex-row/hex-row';
import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ButtonRow } from "../button-row/button-row";
import getBoardData from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';
import styles from './game-board.module.scss';
import Head from "next/head";
import { Header } from "../header/header";
import { useRouter } from "next/router";

export const GameBoard = ({ props }) => {

    const router = useRouter();
    const { numbers_freq, resources_freq, row_config, port_config, title } = props;
    const gameBoardRef = useRef();
    const heightRef = useRef();
    const [data, setData] = useState(null);
    const [availableWidth, setAvailableWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [availableHeight, setAvailableHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0);
    const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? screen.width : 0);
    const [scale, setScale] = useState(1);
    const [transformOrigin, setTransformOrigin] = useState(null);

    let portsState = router.query['ports'];
    if (portsState) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('ports', portsState);
        }
    } else {
        if (typeof window !== 'undefined') {
            portsState = localStorage.getItem('ports');
        }
    }
    const [ports, setPorts] = useState(portsState);

    useEffect(() => {
        setData({
            boardData: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports)
        });
    }, []);

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
    }, [data]);

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
                {data?.boardData?.map((row, index) => {
                    return (
                        <HexRow row={row.row} key={index} />
                    )
                })}
                <ButtonRow clear={() => setData({ boardData: getDefaultData(row_config, port_config, ports) })}
                           generate={() => setData({ boardData: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports) })} />
            </Grid>
        </Grid>
    );
}

GameBoard.displayName = 'GameBoard';