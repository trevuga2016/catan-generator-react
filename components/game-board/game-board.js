import { HexRow } from '../hex-row/hex-row';
import { Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ButtonRow } from '../button-row/button-row';
import { useCatanLogic } from '../../hooks/useCatanLogic';
import Head from 'next/head';
import { Header } from '../header/header';
import { useRouter } from 'next/router';

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

    const titleRef = useRef();
    const gameBoardHeight = useRef();
    const gameBoardWidth = useRef();
    const buttonRef = useRef();

    const [availableWidth, setAvailableWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [availableHeight, setAvailableHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0);
    const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? screen.width : 0);
    const [scale, setScale] = useState(1);
    const [topMargin, setTopMargin] = useState(0);
    const [transformOrigin, setTransformOrigin] = useState(null);

    useEffect(() => {
        const titleHeight = titleRef.current.clientHeight;
        const boardWidth = gameBoardWidth.current.clientWidth;
        const boardHeight = gameBoardHeight.current.clientHeight;
        const buttonHeight = buttonRef.current.clientHeight;
        const totalHeight = titleHeight + boardHeight + buttonHeight;
        if (availableWidth < boardWidth) {
            const scale = screenWidth / boardWidth;
            setScale(scale);
            const boardScale = boardWidth * scale;
            setTransformOrigin('top center');
            setTopMargin(titleHeight + boardScale + 30);
        } else if (totalHeight > availableHeight) {
            const scale = availableHeight / (totalHeight + 100);
            setScale(scale);
            const boardScale = boardHeight * scale;
            setTransformOrigin('top center');
            setTopMargin(titleHeight + boardScale + 30);
        } else {
            setScale(1);
            setTopMargin(titleHeight + boardHeight + 30);
        }
    }, [boardData]);

    return(
      <>
          <Head>
              <title>{title} | Catan Board Generator</title>
              <link rel="icon" href="/catan-icon.ico"/>
          </Head>
          <Grid container alignItems="center" ref={titleRef}>
              <Header title={title} />
          </Grid>
          <Grid container ref={gameBoardHeight} justifyContent="center" sx={{ transform: `scale(${scale})`, transformOrigin: `${transformOrigin}` }}>
              <Grid item ref={gameBoardWidth}>
                  {boardData?.map((row, index) => {
                      return (
                        <HexRow row={row.row} key={index} />
                      )
                  })}
              </Grid>
          </Grid>
          <Grid container justifyContent="center" ref={buttonRef} top={topMargin} position="fixed">
              <ButtonRow generate={() => generateBoardData()} stats={stats} />
          </Grid>
      </>
    );
}

GameBoard.displayName = 'GameBoard';