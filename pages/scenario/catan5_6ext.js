import Head from 'next/head';
import { Header } from '../../components/header/header';
import { GameBoard } from '../../components/game-board/game-board';
import { ButtonRow } from '../../components/button-row/button-row';
import { useState } from 'react';
import getBoardData from '../../helpers/catan-logic';
import getDefaultData from '../../helpers/default-logic';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';

export const Catan5_6Ext = () => {

    const router = useRouter();
    const { ports } = router.query;

    const [data, setData] = useState({
        props: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports)
    });

    return(
        <>
            <Head>
                <title>Catan Board Generator</title>
                <link rel="icon" href="/catan-icon.ico" />
            </Head>
            <Header></Header>
            <Grid container sx={{ overflowX: "auto", overflowY: "hidden" }}>
                <GameBoard props={data.props}></GameBoard>
            </Grid>
            <ButtonRow 
                clear={() => setData({ props: getDefaultData(row_config, port_config, ports) })}
                generate={() => setData({ props: getBoardData(numbers_freq, resources_freq, row_config, port_config, ports) })} />
        </>
    );
};

export default Catan5_6Ext;

const numbers_freq = {
    '2': 2,
    '3': 3,
    '4': 3,
    '5': 3,
    '6': 3,
    '8': 3,
    '9': 3,
    '10': 3,
    '11': 3,
    '12': 2
};

const resources_freq = {
    'Wheat': 6,
    'Wood': 6,
    'Sheep': 6,
    'Brick': 5,
    'Ore': 5,
    'Desert': 2
};

const row_config = [3, 4, 5, 6, 5, 4, 3];

const port_config = {
    top: [
        { type: '3for1', rotation: '0deg' },
        { type: '', rotation: '' },
        { type: '2for1_sheep', rotation: '60deg' },
        { type: '', rotation: '' }
    ],
    ends: [
        { type: '3for1', rotation: '60deg', position: 2 },
        { type: '', rotation: '', position: 0 },
        { type: '2for1_ore', rotation: '-60deg', position: 1 },
        { type: '3for1', rotation: '120deg', position: 2 },
        { type: '3for1', rotation: '-120deg', position: 1 },
        [{ type: '2for1_wheat', rotation: '-60deg', position: 1 },
        { type: '2for1_brick', rotation: '180deg', position: 2 }],
        { type: '2for1_sheep', rotation: '120deg', position: 2 },
    ],
    bottom: [
        { type: '3for1', rotation: '-120deg' },
        { type: '', rotation: '' },
        { type: '2for1_wood', rotation: '180deg' },
        { type: '', rotation: '' }
    ]
}
