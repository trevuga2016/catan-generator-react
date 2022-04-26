import { Grid } from "@mui/material";
import { Header } from "../../components/header/header";
import Head from "next/head";
import { Hex } from "../../components/hex/hex";
import { useEffect, useRef, useState } from "react";
import { ButtonRow } from "../../components/button-row/button-row";

export const Demo = () => {

    const rowRef = useRef();
    const heightRef = useRef();
    const titleRef = useRef();
    const buttonRef = useRef();
    const [scale, setScale] = useState(0);
    const [topMargin, setTopMargin] = useState(0);
    const [transformOrigin, setTransformOrigin] = useState(null);
    const title = 'The Settlers of Catan Demo';

    useEffect(() => {
        let availableWidth = 0;
        let availableHeight = 0;
        let screenWidth = 0;
        if (typeof window !== "undefined") {
            availableWidth = window.innerWidth;
            console.log(`AVAILABLE WIDTH: ${availableWidth}`);
            availableHeight = window.innerHeight;
            console.log(`AVAILABLE HEIGHT: ${availableHeight}`);
            screenWidth = screen.width;
            console.log(`SCREEN WIDTH: ${screenWidth}`);
        }
        const rowWidth = rowRef.current.clientWidth;
        const rowHeight = heightRef.current.clientHeight;
        const buttonHeight = buttonRef.current.clientHeight;
        const totalHeight = rowHeight + titleRef.current.clientHeight + 26 + 35 + 100;
        console.log(`ROW WIDTH: ${rowWidth}`);
        console.log(`ROW HEIGHT: ${rowHeight}`);
        console.log('TITLE HEIGHT: ' + titleRef.current.clientHeight);
        console.log(`BUTTON HEIGHT: ${buttonHeight}`);
        console.log(`TOTAL HEIGHT: ${totalHeight}`);
        if (availableWidth <= rowWidth) {
            console.log(`SCALE WIDTH TRUE`);
            const wScale = screenWidth / rowWidth;
            setScale(wScale);
            setTransformOrigin('top left');
            console.log(`W SCALE: ${wScale}`);
            const topMargin = (rowHeight * wScale) + titleRef.current.clientHeight + 30;
            console.log('TOP MARGIN: ' + topMargin);
            setTopMargin(topMargin);
        } else if (totalHeight > availableHeight) {
            console.log(`SCALE HEIGHT TRUE`);
            const hScale = availableHeight / totalHeight;
            setScale(hScale);
            setTransformOrigin('top center');
            console.log(`H SCALE: ${hScale}`);
            const boardHeight = rowHeight * hScale;
            console.log('BOARD HEIGHT: ' + boardHeight);
            const topMargin = (rowHeight * hScale) + titleRef.current.clientHeight + 30;
            console.log('TOP MARGIN: ' + topMargin);
            setTopMargin(topMargin);
        } else {
            console.log(`SCALE FALSE - setting scale to 1`);
            setScale(1);
        }
    }, []);

    const hex = { resource: 'Ore', token: { number: '8', probability: '\u2022\u2022\u2022\u2022\u2022'}};

    return(
        <>
            <Grid container direction="column" alignItems="center" ref={titleRef}>
                <Head>
                    <title>{title} | Catan Board Generator</title>
                    <link rel="icon" href="/catan-icon.ico"/>
                </Head>
                <Grid item >
                    <Header title={title} />
                </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center" ref={heightRef} sx={{ transform: `scale(${scale})`, transformOrigin: `${transformOrigin}`}}>
                <Grid item ref={rowRef}>
                    {
                        row_config.map((value, index) => {
                            return(
                              <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px" key={index}>
                                  {
                                      Array.from(Array(value), (e, i) => {
                                          return(<Hex hex={hex} key={i} />);
                                      })
                                  }
                              </Grid>
                            );
                        })
                    }
                </Grid>
            </Grid>
            <Grid container direction="column" alignItems="center" ref={buttonRef}>
                <ButtonRow top={topMargin}/>
            </Grid>
    </>
    );
}

export default Demo;

Demo.displayName = 'Demo';

const row_config = [4,5,6,7,8,7,6,5,4];