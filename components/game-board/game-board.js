import { HexRow } from '../hex-row/hex-row';
import { FormControlLabel, FormGroup, Grid, Switch } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { ButtonRow } from '../button-row/button-row';
import { useCatanLogic } from '../../hooks/useCatanLogic';
import Head from 'next/head';
import { Header } from '../header/header';
import { useRouter } from 'next/router';

export const GameBoard = ({ props }) => {

    const { numbersFrequency, resourcesFrequency, rowConfig, portConfig } = props;

    const router = useRouter();

    let ports = router?.query['ports'];
    if (ports) {
        if (typeof window !== 'undefined') {
            sessionStorage?.setItem('ports', ports);
        }
    } else {
        if (typeof window !== 'undefined') {
            ports = sessionStorage?.getItem('ports');
        }
    }

    const { boardData, stats, generateBoardData } = useCatanLogic(numbersFrequency, resourcesFrequency, rowConfig, portConfig, ports);

    const titleRef = useRef();
    const widthRef = useRef();
    const heightRef = useRef();

    const [title, setTitle] = useState(props?.title);
    const [ckCheck, setCkCheck] = useState(false);

    const [availableWidth, setAvailableWidth] = useState(0);
    const [availableHeight, setAvailableHeight] = useState(0);
    const [scale, setScale] = useState(1);
    const [topMargin, setTopMargin] = useState(0);
    const [transformOrigin, setTransformOrigin] = useState(null);

    const handleChange = (e) => {
        setCkCheck(e.target.checked);
        e.target.checked ? setTitle(props?.expansions?.[0]?.fields?.title) : setTitle(props?.title);
    }

    useEffect(() => {
        if (!router.isReady) return;
        if (router?.query['expansion']) {
            setCkCheck(true);
            setTitle(props?.expansions?.[0]?.fields?.title);
        } else {
            setTitle(props?.title);
        }
    }, [router.isReady]);

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
                  <Header title={title} />
              </Grid>
              <Grid item mb={2}>
                  <FormGroup>
                      <FormControlLabel control={<Switch onChange={handleChange} checked={ckCheck} name="c&k" />} label="Cities & Knights" />
                  </FormGroup>
              </Grid>
          </Grid>
          <Grid container direction="column" ref={heightRef} alignItems="center" sx={{ transform: `scale(${scale})`, transformOrigin: `${transformOrigin}` }}>
              <Grid item ref={widthRef}>
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