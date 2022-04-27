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
    const gameBoardRef = useRef();
    const heightRef = useRef();

    const [availableWidth, setAvailableWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
    const [availableHeight, setAvailableHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0);
    const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? screen.width : 0);
    const [scale, setScale] = useState(1);
    const [topMargin, setTopMargin] = useState(0);
    const [transformOrigin, setTransformOrigin] = useState(null);

    useEffect(() => {
        const rowWidth = gameBoardRef.current.clientWidth;
        const boardHeight = heightRef.current.clientHeight;
        const totalHeight = boardHeight + titleRef.current.clientHeight + 161;
        if (availableWidth <= rowWidth) {
            setScale(screenWidth / rowWidth);
            setTransformOrigin('top left');
            setTopMargin((boardHeight * (screenWidth / rowWidth)) + titleRef.current.clientHeight + 30);
        } else if (totalHeight > availableHeight) {
            setScale(availableHeight / totalHeight);
            setTransformOrigin('top center');
            setTopMargin((boardHeight * (availableHeight / totalHeight)) + titleRef.current.clientHeight + 30);
        } else {
            setScale(1);
            setTopMargin(boardHeight + titleRef.current.clientHeight + 30);
        }
    }, [boardData]);

    return(
      <>
          <Head>
              <title>{title} | Catan Board Generator</title>
              <link rel="icon" href="/catan-icon.ico"/>
          </Head>
          <Grid container direction="column" alignItems="center" ref={titleRef}>
              <Grid item >
                  <Header title={title} />
              </Grid>
          </Grid>
          <Grid container direction="column" ref={heightRef} alignItems="center" sx={{ transform: `scale(${scale})`, transformOrigin: `${transformOrigin}` }}>
              <Grid item ref={gameBoardRef}>
                  {boardData?.map((row, index) => {
                      return (
                        <HexRow row={row.row} key={index} />
                      )
                  })}
              </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center">
              <ButtonRow generate={() => generateBoardData()} stats={stats} top={topMargin} />
          </Grid>
      </>
    );
}

GameBoard.displayName = 'GameBoard';