import { HexRow } from '../hex-row/hex-row';
import { Grid } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ButtonRow } from '../button-row/button-row';
import { useCatanLogic } from '../../hooks/useCatanLogic';
import Head from 'next/head';
import { Header } from '../header/header';
import { useRouter } from 'next/router';
import { Expansions } from '../expansions/expansions';
import { useTitleContext } from '../../contexts/title-context';
import { useExpansionContext } from '../../contexts/expansion-context';

export const GameBoard = ({props}) => {

  const router = useRouter();
  const port = router?.query['ports'];

  const { boardData, stats, generateBoardData } = useCatanLogic(props, port);
  const { title } = useTitleContext();

  const titleRef = useRef();
  const widthRef = useRef();
  const heightRef = useRef();
  const { expansion } = useExpansionContext();

  const [availableWidth, setAvailableWidth] = useState(0);
  const [availableHeight, setAvailableHeight] = useState(0);
  const [scale, setScale] = useState(1);
  const [topMargin, setTopMargin] = useState(0);
  const [transformOrigin, setTransformOrigin] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && expansion?.includes("ck")) {
      document.getElementsByTagName("html").item(0).style.background = "url(../ck-backdrop.png) no-repeat center center fixed";
      document.getElementsByTagName("body").item(0).style.background = "url(../ck-backdrop.png) no-repeat center center fixed";
      document.getElementsByTagName("html").item(0).style.backgroundSize = "cover";
      document.getElementsByTagName("body").item(0).style.backgroundSize = "cover";
    } else {
      document.getElementsByTagName("html").item(0).style.background = "url(../catan_backdrop.png) no-repeat center center fixed";
      document.getElementsByTagName("body").item(0).style.background = "url(../catan_backdrop.png) no-repeat center center fixed";
      document.getElementsByTagName("html").item(0).style.backgroundSize = "cover";
      document.getElementsByTagName("body").item(0).style.backgroundSize = "cover";
    }
  }, [expansion]);

  useEffect(() => {
    setAvailableWidth(typeof window !== "undefined" ? window.innerWidth : 0);
    setAvailableHeight(typeof window !== "undefined" ? window.innerHeight : 0);
  }, [availableWidth, availableHeight]);

  useEffect(() => {
    const boardWidth = widthRef.current.clientWidth;
    const boardHeight = heightRef.current.clientHeight;
    const totalHeight = boardHeight + titleRef.current.clientHeight + 161;
    if (availableWidth < boardWidth) {
      setScale(availableWidth / boardWidth);
      setTransformOrigin('top left');
      setTopMargin((boardHeight * (availableWidth / boardWidth)) + titleRef.current.clientHeight + 30);
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
        <Grid item>
          <Header/>
        </Grid>
        {
          props?.expansions?.length > 0 &&
          <Grid item pb={2}>
            <Expansions props={props}/>
          </Grid>
        }
      </Grid>
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
      <Grid container direction="column" alignItems="center">
        <ButtonRow generate={() => generateBoardData()} stats={stats} top={topMargin}/>
      </Grid>
    </>
  );
}

GameBoard.displayName = 'GameBoard';