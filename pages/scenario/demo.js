import { Grid, Box } from "@mui/material";
import { Header } from "../../components/header/header";
import Head from "next/head";
import { Hex } from "../../components/hex/hex";
import { useEffect, useRef, useState } from "react";

export const Demo = () => {

    const rowRef = useRef();
    const [scale, setScale] = useState(0);

    useEffect(() => {
        let availableWidth = 0;
        let screenWidth = 0;
        if (typeof window !== "undefined") {
            availableWidth = window.innerWidth;
            console.log(`AVAILABLE WIDTH: ${availableWidth}`);
            const availableHeight = window.innerHeight;
            console.log(`AVAILABLE HEIGHT: ${availableHeight}`);
            screenWidth = screen.width;
            console.log(`SCREEN WIDTH: ${screenWidth}`);
        }
        const rowWidth = rowRef.current.clientWidth;
        console.log(`ROW WIDTH: ${rowWidth}`);
        if (availableWidth <= rowWidth) {
            console.log(`SCALE TRUE`);
            setScale(screenWidth / rowWidth);
            console.log(`SCALE: ${scale}`);
        } else {
            console.log(`SCALE FALSE - setting scale to 1`);
            setScale(1);
        }
    }, []);

    const hex = { resource: 'Ore', token: { number: '8', probability: '\u2022\u2022\u2022\u2022\u2022'}}

    return(
        <Grid container direction="column" alignItems="center" height="100%" sx={{ transform: `scale(${scale})`, transformOrigin: "0 0"}}>
            <Head>
                <title>Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico"/>
            </Head>
            <Grid item>
                <Header />
            </Grid>
            <Grid item ref={rowRef}>
                <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px">
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                </Grid>
                <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px">
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                </Grid>
                <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px">
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                </Grid>
                <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px">
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                </Grid>
                <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px">
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                </Grid>
                <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px">
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                </Grid>
                <Grid container direction="row" wrap="nowrap" justifyContent="center" mb="-26px">
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                    <Hex hex={hex} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Demo;

Demo.displayName = 'Demo';