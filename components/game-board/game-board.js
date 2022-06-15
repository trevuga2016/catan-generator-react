import { HexRow } from '../hex-row/hex-row';
import { Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ButtonRow } from '../button-row/button-row';
import { useCatanLogic } from '../../hooks/useCatanLogic';
import Head from 'next/head';
import { Header } from '../header/header';
import { useRouter } from 'next/router';
import styles from './game-board.module.scss';
import { useGameContext } from '../../contexts/game-context';
import { useBackgroundProps } from '../../hooks/useBackgroundProps';

export const GameBoard = ({ props }) => {

  const router = useRouter();
  const { harbors, setHarbors } = useGameContext();
  const { boardData, stats, generateBoardData } = useCatanLogic(props, harbors);
  const { setBackgroundImage, setBackgroundColor } = useBackgroundProps();

  const titleRef = useRef();
  const widthRef = useRef();
  const heightRef = useRef();

  const [availableWidth, setAvailableWidth] = useState(0);
  const [availableHeight, setAvailableHeight] = useState(0);
  const [boardHeight, setBoardHeight] = useState(undefined);
  const [scale, setScale] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;
    setBackgroundImage(props?.backgroundProps?.fields?.backgroundImage?.fields?.file?.url);
    setBackgroundColor(props?.backgroundProps?.fields?.backgroundColor);
    setHarbors(router?.query['ports']);
  }, [router.isReady]);

  useEffect(() => {
    setAvailableWidth(typeof window !== "undefined" ? window.innerWidth : 0);
    setAvailableHeight(typeof window !== "undefined" ? window.innerHeight : 0);
  }, [availableWidth, availableHeight]);

  useEffect(() => {
    const boardHeight = heightRef.current.clientHeight;
    const calcHeight = boardHeight * scale;
    setBoardHeight(calcHeight);
  }, [scale]);

  useEffect(() => {
    const boardWidth = widthRef.current.clientWidth;
    const boardHeight = heightRef.current.clientHeight;
    const totalHeight = boardHeight + titleRef.current.clientHeight + 161;
    if (availableWidth < boardWidth) {
      setScale(availableWidth / boardWidth);
      setTransformOrigin('top left');
    } else if (totalHeight > availableHeight) {
      setScale(availableHeight / totalHeight);
      setTransformOrigin('top center');
    } else {
      setScale(1);
    }
  }, [boardData]);

  return(
    <div className={styles["game-board"]}>
      <Head>
        <title>{props?.title} | Catan Board Generator</title>
        <link rel="icon" href="/catan-icon.ico"/>
      </Head>
      <Grid container direction="column" alignItems="center" ref={titleRef}>
        <Grid item>
          <Header title={props?.title} />
        </Grid>
      </Grid>
      <Grid container height={boardHeight}>
        <Grid container direction="column" ref={heightRef} alignItems="center"
              sx={{transform: `scale(${scale})`, transformOrigin: `${transformOrigin}`}}>
          <Grid item ref={widthRef}>
            {boardData?.map((row, index) => {
              return (
                <HexRow row={row.row} key={index}/>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" alignItems="center">
        <ButtonRow generate={() => generateBoardData()} stats={stats} />
      </Grid>
    </div>
  );
}

GameBoard.displayName = 'GameBoard';