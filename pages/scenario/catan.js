import Head from 'next/head';
import { Header } from '../../components/header/header';
import { GameBoard } from '../../components/game-board/game-board';
import { ButtonRow } from '../../components/button-row/button-row';
import getBoardData from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';
import { useRouter } from 'next/router';
import { Footer } from '../../components/footer/footer';
import { Grid } from '@mui/material';
import { useState, useRef, useEffect } from 'react';

export const Catan = () => {

    const router = useRouter();
    const { ports } = router.query;

    const [data, setData] = useState({
        props: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports)
    });

    const gameBoardRef = useRef();
    const [aWidth, setAWidth] = useState(null);
    const [aHeight, setAHeight] = useState(null);
    const [scale, setScale] = useState(1);

    const updateAvailableWidth = () => {
        if (typeof window !== "undefined") {
            const availableWidth = window.innerWidth;
            setAWidth(availableWidth);
            const availableHeight = window.innerHeight;
            setAHeight(availableHeight)
        }
    }

    const updateScale = () => {
        const divWidth = gameBoardRef.current.clientWidth;
        const divHeight = gameBoardRef.current.clientHeight;
        let nScale = Math.min(aWidth / divWidth, aHeight / divHeight);
        aWidth <= divWidth ? setScale(nScale) : setScale(1);
    }

    useEffect(() => {
        window.addEventListener("resize", updateAvailableWidth);
    }, []);

    useEffect(() => {
        if (aWidth == null && aHeight == null) {
            updateAvailableWidth();
        }
        updateScale();
    }, [aWidth, aHeight]);

    return(
        <Grid container direction="column" alignItems="center">
            <Head>
                <title>Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico" />
            </Head>
            <Grid item textAlign="center" top="0">
                <Header />
            </Grid>
            <Grid item ref={gameBoardRef} sx={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
                <GameBoard props={data.props} />
            </Grid>
            <Grid item mt="35px" width="100%">
                <ButtonRow
                    clear={() => setData({ props: getDefaultData(row_config, port_config, ports) })}
                    generate={() => setData({ props: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports) })} />
            </Grid>
            <Grid item width="100%" textAlign="right" bottom="0">
                <Footer />
            </Grid>
        </Grid>
    );
};

export default Catan;

const numbers_freq = {
    '2': 1,
    '3': 2,
    '4': 2,
    '5': 2,
    '6': 2,
    '8': 2,
    '9': 2,
    '10': 2,
    '11': 2,
    '12': 1
};

const resources_freq = {
    'Wheat': 4,
    'Wood': 4,
    'Sheep': 4,
    'Brick': 3,
    'Ore': 3,
    'Desert': 1
};

const row_config = [3, 4, 5, 4, 3];

const port_config = {
    top: [
        { type: '', rotation: '' },
        { type: '3for1', rotation: '0deg' },
        { type: '', rotation: '' },
        { type: '3for1', rotation: '60deg' }
    ],
    ends: [
        { type: '2for1_sheep', rotation: '0deg', position: 1 },
        { type: '2for1_brick', rotation: '120deg', position: 2 },
        { type: '3for1', rotation: '-60deg', position: 1 },
        { type: '2for1_wood', rotation: '120deg', position: 2 },
        { type: '2for1_ore', rotation: '-120deg', position: 1 }
    ],
    bottom: [
        { type: '', rotation: '' },
        { type: '2for1_wheat', rotation: '-120deg' },
        { type: '', rotation: '' },
        { type: '3for1', rotation: '180deg' }
    ]
}
